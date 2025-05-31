import { Injectable } from '@nestjs/common';
import { CreatePostForumMessageDto } from '../dto/create-post-forum-message.dto';
import { UpdatePostForumMessageDto } from '../dto/update-post-forum-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostForumMessage } from '../entities/post-forum-message.entity';
import { Repository } from 'typeorm';
import { PostForumMessagesValidator } from './post-forum-messages.validator';
import { PostForumsService } from '../../post-forums/services/post-forums.service';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';

@Injectable()
export class PostForumMessagesService {
	constructor(
		@InjectRepository(PostForumMessage)
		private readonly postForumMessageRepository: Repository<PostForumMessage>,
		private readonly postForumMessagesValidator: PostForumMessagesValidator,
		private readonly postForumsService: PostForumsService,
		private readonly usersService: UsersService
	) { }

	async create(data: CreatePostForumMessageDto) {
		this.postForumMessagesValidator.validateCreate(data);
		const user = await this.usersService.getAUserById(data.idUser);
		const forum = await this.postForumsService.findOne(data.idForum);
		const message = new PostForumMessage();
		message.user = user!;
		message.forum = forum!;
		message.content = data.content;
		const messageSaved = await this.postForumMessageRepository.save(message);
		return messageSaved;
	}

	async findAll(idForum: number,filters: {
		page?: number,
		limit?: number,
		createdAt?: string
	} = {}) {
		const forum = await this.postForumsService.findOne(idForum);
		const page = isNaN(Number(filters.page)) ? 1 : Number(filters.page);
		const limit = isNaN(Number(filters.limit)) ? 10 : Number(filters.limit);
		const skip = (page - 1) * limit;
		const [messages,total] = await this.postForumMessageRepository.findAndCount({
			where: {
				forum: {
					id: forum!.id
				}
			},
			relations: {
				user: true
			},
			order: {
				...(filters.createdAt ? {
					createdAt: (filters.createdAt === 'ASC' ? 'ASC' : 'DESC')
				}:{
					createdAt: 'DESC'
				})
			},
			skip: skip,
			take: limit,
			select: {
				id: true,
				content: true,
				user: {
					id: true,
					name: true
				},
				createdAt: true
			}
		});
		this.postForumMessagesValidator.validateMessages(messages);
		return {
			messages: messages,
			total: total,
			page: page,
			limit: limit,
			pages: Math.ceil(total / limit)
		};
	}

	findOne(id: number) {
		return `This action returns a #${id} postForumMessage`;
	}

	update(id: number, updatePostForumMessageDto: UpdatePostForumMessageDto) {
		return `This action updates a #${id} postForumMessage`;
	}

	remove(id: number) {
		return `This action removes a #${id} postForumMessage`;
	}
}
