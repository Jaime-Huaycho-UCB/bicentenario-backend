import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query, UseGuards } from '@nestjs/common';
import { CommentsService } from './services/comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { GetCommentsDto } from './dto/get-comments.dto';

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

	// @UseGuards(AuthGuard)
	@Get()
	@ApiOperation({summary: 'Api para obtener todo los comentarios de un testimonio'})
	@ApiResponse({
		description: 'Salida en caso de obtener los comentarios exitosamente',
		status: 200,
		type: GetCommentsDto
	})
	async findAllComments(
		@Query('idPost') idPost: string,
		@Query('orderByCreatedAt') createdAt: string,
		@Query('orderByLikes') likes: string,
		@Query('orderByDislikes') dislikes: string,
		@Res() res: Response
	) {
		try {
			const comments = await this.commentsService.findAllComments({
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
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Get('/respones')
	@ApiOperation({summary: 'Api para obtener todo respuestas a un comentario'})
	async findAllResponses(
		@Query('idComment') idComment: string,
		@Res() res: Response
	) {
		try {
			const responses = await this.commentsService.findAllResponses({
				idComment: parseInt(idComment),
			});
			return res.status(200).json({
				code: 200,
				responses: responses
			});
		} catch (error) {
			return responseError(error,res);
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
