import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query, UseGuards } from '@nestjs/common';
import { CommentsService } from './services/comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { ApiExcludeEndpoint, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { GetCommentsDto } from './dto/get-comments.dto';
import { CreateResponseDto } from './dto/create-response.dto';
import { DtoResponse } from 'src/common/helpers/classes.dto';
import { GetCommentResponsesDto } from './dto/get-comment-responses.dto';

@ApiTags('Comentarios')
@Controller('comments')
export class CommentsController {
	constructor(private readonly commentsService: CommentsService) { }

	@Post()
	@ApiOperation({summary: 'Api para crear un comentario'})
	@ApiResponse({
		description: 'Salida en caso de crear exitosamente el comentario',
		status: 200,
		type: DtoResponse
	})
	async createComment(@Body() data: CreateCommentDto,@Res() res: Response) {
		try {
			const response = await this.commentsService.createComment(data);
			return res.status(200).json({
				code: 200,
				message: response
			});
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Post('/response')
	@ApiOperation({summary: 'Api para responder un comentario'})
	@ApiResponse({
		description: 'Salida en caso de crear la respuesta del comentario exitosamente',
		status: 200,
		type: DtoResponse
	})
	async createResponse(@Body() data: CreateResponseDto,@Res() res: Response) {
		try {
			const response = await this.commentsService.createResponse(data);
			return res.status(200).json({
				code: 200,
				message: response
			});
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Get()
	@ApiOperation({summary: 'Api para obtener todo los comentarios de un testimonio'})
	@ApiQuery({name: 'idPost',required: false})
	@ApiQuery({name: 'orderByCreatedAt',required: false})
	@ApiQuery({name: 'orderByLikes',required: false})
	@ApiQuery({name: 'orderByDislikes',required: false})
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
	@ApiQuery({name: 'idComment',required: false})
	@ApiResponse({
		description: 'Salida en caso de obtener las respuestas del comentario',
		status: 200,
		type: GetCommentResponsesDto
	})
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
	@ApiExcludeEndpoint(true)
	findOne(@Param('id') id: string) {
		return this.commentsService.findOne(+id);
	}

	@Patch(':id')
	@ApiExcludeEndpoint(true)
	update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
		return this.commentsService.update(+id, updateCommentDto);
	}

	@Delete(':id')
	@ApiExcludeEndpoint(true)
	remove(@Param('id') id: string) {
		return this.commentsService.remove(+id);
	}
}
