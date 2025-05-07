import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from '../entities/comment.entity';
import { IsNull, Not, Repository } from 'typeorm';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';
import { PostsService } from 'src/modules/post-modules/posts/services/posts.service';
import { CommentsValidator } from './comments.validator';
import { CreateResopnseDto } from '../dto/create-response.dto';

@Injectable()
export class CommentsService {
	constructor(
		@InjectRepository(Comment)
		private readonly commentRepository: Repository<Comment>,
		private readonly commentsValidator: CommentsValidator,
		private readonly usersService: UsersService,
		private readonly postsService: PostsService
	) { }

	async createComment(data: CreateCommentDto) {
		const user = await this.usersService.getAUserById(data.idUser);
		const post = await this.postsService.findOne(`${data.idPost}`);
		const comment = new Comment();
		comment.post = post!;
		comment.user = user!;
		comment.content = data.content;
		const commentSaved = await this.commentRepository.save(comment);
		return await this.findOne(commentSaved.id);
	}

	async createResponse(data: CreateResopnseDto) {
		const comment = await this.findOne(data.idComment);
		const user = await this.usersService.getAUserById(data.idUser);
		const response = new Comment();
		response.head = comment!.id;
		response.user = user!;
		response.content = data.content;
		const responseSaved = await this.commentRepository.save(response);
		return await this.findOne(responseSaved.id);
	}

	async findAll(filters: {
		idPost?: number,
		order?: {
			likes: string,
			dislikes: string,
			created_at: string,
		}
	} = {},isComment = true) {
		const comments = await this.commentRepository.find({
			where: {
				isDeleted: false,
				...(filters.idPost !== undefined && !isNaN(Number(filters.idPost)) ? {
					post: {
						id: filters.idPost
					}
				} : {}),
				...(isComment ? {}:{
					head: 
				})
			},
			relations: {
				user: true
			},
			select: {
				user: {
					id: true,
					name: true,
				}
			},

			...(filters.order ? {
				order: {
					...(filters.order.created_at && (filters.order.created_at === 'ASC' || filters.order.created_at === 'DESC') ? {
						createdAt: filters.order.created_at,
					} : {}),
					...(filters.order.likes && (filters.order.likes === 'ASC' || filters.order.likes === 'DESC') ? {
						likes: filters.order.likes,
					} : {}),
					...(filters.order.dislikes && (filters.order.dislikes === 'ASC' || filters.order.dislikes === 'DESC') ? {
						dislikes: filters.order.dislikes,
					} : {})
				}
			} : {})
		});
		this.commentsValidator.validateComments(comments);
		return comments;
	}

	async findOne(id: number, relations = {
		user: false,
	}) {
		const comment = await this.commentRepository.findOne({
			where: {
				id: id
			},
			relations: {
				...(relations.user ? {
					user: true
				} : {})
			},
			select: {
				...(relations.user ? {
					user: {
						id: true,
						name: true,
						email: true
					}
				} : {})
			}
		});
		this.commentsValidator.validateComment(comment);
		return comment;
	}

	update(id: number, updateCommentDto: UpdateCommentDto) {
		return `This action updates a #${id} comment`;
	}

	remove(id: number) {
		return `This action removes a #${id} comment`;
	}
}
