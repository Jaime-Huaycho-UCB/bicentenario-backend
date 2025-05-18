import { Injectable } from '@nestjs/common';
import { CreatePostStarDto } from '../dto/create-post-star.dto';
import { UpdatePostStarDto } from '../dto/update-post-star.dto';
import { PostStar } from '../entities/post-star.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostStarsValidator } from './post-stars.validator';
import { PostsService } from '../../posts/services/posts.service';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';

@Injectable()
export class PostStarsService {
	constructor(
		@InjectRepository(PostStar)
		private readonly postStarRepository: Repository<PostStar>,
		private readonly postStarsValidator: PostStarsValidator,
		private readonly postsService: PostsService,
		private readonly usersService: UsersService
	){}

	async create(data: CreatePostStarDto) {
		this.postStarsValidator.validateCreateStar(data);
		const user = await this.usersService.getAUserById(data.idUser);
		const post = await this.postsService.findOne(`${data.idPost}`);
		let star;
		try {
			star = await this.findOne(data.idPost,data.idUser);
		} catch (error) {
			star = new PostStar();
			star.post = post!;
			star.user = user!;
		}
		star.number = data.number;
		const starSaved = await this.postStarRepository.save(star);
		return starSaved;
	}

	findAll() {
		return `This action returns all postStars`;
	}

	async findOne(idPost: number,idUser: number) {
		this.postStarsValidator.validateIdPost(idPost);
		this.postStarsValidator.validateIdUser(idUser);
		const star = await this.postStarRepository.findOne({
			where: {
				user: {
					id: idUser
				},
				post: {
					id: idPost
				}
			}
		})
		this.postStarsValidator.validateStar(star);
		return star;
	}

	update(id: number, updatePostStarDto: UpdatePostStarDto) {
		return `This action updates a #${id} postStar`;
	}

	async remove(idPost: number,idUser: number) {
		const star = await this.postStarRepository.findOne({
			where: {
				user: {
					id: idUser
				},
				post: {
					id: idPost
				}
			}
		})
		this.postStarsValidator.validateStar(star);
		return await this.postStarRepository.delete(star!.id);
	}
}
