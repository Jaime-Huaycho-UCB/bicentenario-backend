import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreatePostInteractionDto } from '../dto/create-post-interaction.dto';
import { UpdatePostInteractionDto } from '../dto/update-post-interaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostInteraction } from '../entities/post-interaction.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';
import { PostsService } from '../../posts/services/posts.service';
import { PostInteractionsValidator } from './post-interactions.validator';

@Injectable()
export class PostInteractionsService {
	constructor(
		@InjectRepository(PostInteraction)
		private readonly postInteractionRepository: Repository<PostInteraction>,
		private readonly postInteractionsValidator: PostInteractionsValidator,
		private readonly usersService: UsersService,
		@Inject(forwardRef(() => PostsService))
		private readonly postsService: PostsService
	){}

	async create(data: CreatePostInteractionDto,type: number) {
		this.postInteractionsValidator.validateCreateInteraction(data);
		const previewInteraction = await this.postInteractionRepository.findOne({
			where: {
				post: {
					id: data.idPost
				},
				user: {
					id: data.idUser
				}
			}
		})
		if (previewInteraction){
			return previewInteraction;
		}
		const user = await this.usersService.getAUserById(data.idUser);
		const post = await this.postsService.findOne(`${data.idPost}`);
		const interaction = new PostInteraction();
		interaction.user = user!;
		interaction.post = post!;
		interaction.type = type;
		const interactionSaved = await this.postInteractionRepository.save(interaction);
    	return interactionSaved;
	}

	async findOne(idPost: number,idUser: number){
		this.postInteractionsValidator.validateIdPost(idPost);
		this.postInteractionsValidator.validateIdUser(idUser);
		const interaction = await this.postInteractionRepository.findOne({
			where: {
				post: {
					id: idPost
				},
				user: {
					id: idUser
				}
			}
		});
		this.postInteractionsValidator.validateInteraction(interaction);
		return interaction;
	}

	async remove(idPost: number,idUser: number) {
		this.postInteractionsValidator.validateIdPost(idPost);
		this.postInteractionsValidator.validateIdUser(idUser);
		const user = await this.usersService.getAUserById(idUser);
		const post = await this.postsService.findOne(`${idPost}`);
		const interaction = await this.postInteractionRepository.findOne({
			where: {
				post: {
					id: post!.id
				},
				user: {
					id: user!.id
				}
			}
		});
		this.postInteractionsValidator.validateInteraction(interaction);
		return await this.postInteractionRepository.delete(interaction!.id);
	}
}
