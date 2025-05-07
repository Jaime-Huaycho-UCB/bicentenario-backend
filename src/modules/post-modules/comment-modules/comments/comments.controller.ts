import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { CommentsService } from './services/comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';

@Controller('comments')
export class CommentsController {
	constructor(private readonly commentsService: CommentsService) { }

	@Post()
	async createComment(@Body() data: CreateCommentDto,@Res() res: Response) {
		try {
			const newComment = await this.commentsService.createComment(data);
			return res.status(200).json({
				code: 200,
				newComment: newComment
			});
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Get()
	async findAll(
		@Query('idPost') idPost: string,
		@Query('orderByCreatedAt') createdAt: string,
		@Query('orderByLikes') likes: string,
		@Query('orderByDislikes') dislikes: string,
		@Res() res: Response
	) {
		try {
			const comments = await this.commentsService.findAll({
				idPost: parseInt(idPost),
				order: {
					created_at: (createdAt ? createdAt : ''),
					likes: (likes ? likes : ''),
					dislikes: (dislikes ? dislikes : '')
				}
			});
			return res.status(200).json({
				code: 200,
				comments: comments
			});
		} catch (error) {
			
		}
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.commentsService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
		return this.commentsService.update(+id, updateCommentDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.commentsService.remove(+id);
	}
}
