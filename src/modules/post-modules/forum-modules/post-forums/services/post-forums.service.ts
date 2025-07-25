import { Injectable } from '@nestjs/common';
import { CreatePostForumDto } from '../dto/create-post-forum.dto';
import { UpdatePostForumDto } from '../dto/update-post-forum.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostForum } from '../entities/post-forum.entity';
import { Like, Repository } from 'typeorm';
import { PostForumsValidator } from './post-forums.validator';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';
import { PostsService } from 'src/modules/post-modules/posts/services/posts.service';

@Injectable()
export class PostForumsService {
	constructor(
		@InjectRepository(PostForum)
		private readonly postForumRepository: Repository<PostForum>,
		private readonly postForumsValidator: PostForumsValidator,
		private readonly usersService: UsersService,
		private readonly postsService: PostsService
	){}

	async create(data: CreatePostForumDto) {
		this.postForumsValidator.validateCreatePostForum(data);
		const user = await this.usersService.getAUserById(data.idUser);
		const post = await this.postsService.findOne(data.idPost);
		const forum = new PostForum();
		forum.user = user!;
		forum.post = post!;
		forum.title = data.title;
		forum.description = data.description;
		const forumSaved = await this.postForumRepository.save(forum);
		return forumSaved;
	}

	async findAll(filters: {
		idUser?: number,
		idPost?: number,
		search?: string,
		page?: number,
		limit?: number,
		createdAt?: string
	} = {}) {
		const page = isNaN(Number(filters.page)) ? 1 : Number(filters.page);
		const limit = isNaN(Number(filters.limit)) ? 10 : Number(filters.limit);
		const skip = (page - 1) * limit;
		const [forums,total] = await this.postForumRepository.findAndCount({
			where: {
				isDeleted: false,
				...(filters.idPost !== undefined && !isNaN(Number(filters.idPost)) ? {
					post: {
						id: filters.idPost
					}
				} : {}),
				...(filters.idUser !== undefined && !isNaN(filters.idUser) ? {
					user: {
						id: filters.idUser
					}
				} : {}),
				...(filters.search ? {
					title: Like(`%${filters.search.trim()}%`)
				} : {})
			},
			relations: {
				user: true
			},
			select: {
				id: true,
				title: true,
				description: true,
				createdAt: true,
				user: {
					id: true,
					name: true
				}
			},
			order: {
				...(filters.createdAt ? {
					createdAt: (filters.createdAt === 'ASC' ? 'ASC' : 'DESC')
				}:{
					createdAt: 'DESC'
				})
			},
			skip: skip,
			take: limit
		})
		this.postForumsValidator.validateForums(forums);
		return {
			forums: forums,
			total: total,
			page: page,
			limit: limit,
			pages: Math.ceil(total / limit)
		};
	}

	async findOne(idForum: number,relations: {
		user?: boolean
	} = {}) {
		this.postForumsValidator.validateIdForum(idForum);
		const forum = await this.postForumRepository.findOne({
			where: {
				isDeleted: false,
				id: idForum
			},
			relations: {
				...(relations.user ? {
					user: true
				}:{})
			},
			select: {
				id: true,
				title: true,
				description: true,
				createdAt: true,
				...(relations.user ? {
					user: {
						id: true,
						name: true
					}
				}:{})
			},
		})
		this.postForumsValidator.validateForum(forum);
		return forum;
	}

	async update(idForum: number, data: UpdatePostForumDto) {
		const forum = await this.findOne(idForum);
		let c=0;
		if (data.title && data.title != forum!.title){
			forum!.title = data.title;
			c+=1;
		}
		if (data.description && data.description != forum!.description){
			forum!.description = data.description;
			c+=1;
		}
		if (c==0){
			return forum;
		}
		return await this.postForumRepository.save(forum!);
	}

	async remove(idForum: number) {
		const forum = await this.findOne(idForum);
		forum!.isDeleted = true;
		const forumUpdated = await this.postForumRepository.save(forum!);
		return forumUpdated;
	}
}
