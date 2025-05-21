import { Injectable } from '@nestjs/common';
import { CreateCommentInteractionDto } from '../dto/create-comment-interaction.dto';
import { UpdateCommentInteractionDto } from '../dto/update-comment-interaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentInteraction } from '../entities/comment-interaction.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';
import { CommentsService } from '../../comments/services/comments.service';
import { CommentInteractionsValidator } from './comment-interaction.validator';

@Injectable()
export class CommentInteractionsService {
	constructor(
		@InjectRepository(CommentInteraction)
		private readonly commentInteractionRepository: Repository<CommentInteraction>,
		private readonly commentInteractionsValidator: CommentInteractionsValidator,
		private readonly usersService: UsersService,
		private readonly commentsService: CommentsService
	){}

	async create(data: CreateCommentInteractionDto,type: number) {
		const comment = await this.commentsService.findOne(data.idComment);
		const user = await this.usersService.getAUserById(data.idUser);
		let interaction;
		try {
			interaction = await this.findOne(data.idComment,data.idUser);
		} catch (error) {
			interaction = new CommentInteraction();
			interaction.user = user;
			interaction.comment = comment;
		}
		interaction.type = type;
		const interactionSaved = await this.commentInteractionRepository.save(interaction);
		console.log(interactionSaved)
		return interactionSaved;
	}

	async findOne(idComment: number,idUser: number) {
		this.commentInteractionsValidator.validateIdComment(idComment);
		this.commentInteractionsValidator.validateIdUser(idUser);
		const interaction = await this.commentInteractionRepository.findOne({
			where: {
				comment: {
					id: idComment
				},
				user: {
					id: idUser
				}
			}
		})
		this.commentInteractionsValidator.validateInteraction(interaction);
		return interaction;
	}

	async remove(idInteraction: number){
		this.commentInteractionsValidator.validateIdInteraction(idInteraction);
		const interaction = await this.commentInteractionRepository.findOne({
			where: {
				id: idInteraction
			}
		});
		this.commentInteractionsValidator.validateInteraction(interaction);
		return await this.commentInteractionRepository.delete(idInteraction);
	}
}
