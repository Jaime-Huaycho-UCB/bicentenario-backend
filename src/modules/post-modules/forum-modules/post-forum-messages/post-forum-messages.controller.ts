import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res, UseGuards } from '@nestjs/common';
import { PostForumMessagesService } from './services/post-forum-messages.service';
import { CreatePostForumMessageDto } from './dto/create-post-forum-message.dto';
import { UpdatePostForumMessageDto } from './dto/update-post-forum-message.dto';
import { ApiExcludeController, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { findAllPostForumMessagesDto } from './dto/find-all-post-forum-messages.dto';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';

@ApiTags('Mensajes de foros de testimonios')
@Controller('post-forum-messages')
export class PostForumMessagesController {
	constructor(private readonly postForumMessagesService: PostForumMessagesService) { }

	// @UseGuards(AuthGuard)
	@Post()
	@ApiOperation({summary: 'Api para crear mensajes de un foro'})
	@ApiResponse({
		description: 'Respuesta en caso de crear un mensajes exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async create(@Body() data: CreatePostForumMessageDto,@Res() res: Response) {
		try {
			const messageSaved = await this.postForumMessagesService.create(data);
			return res.status(200).json({
				code: 200,
				message: 'Se creo exitosamente el mensaje'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Get(':idForum')
	@ApiOperation({summary: 'Api para obtener los mensajes de un foro'})
	@ApiQuery({name: 'createdAt',description: 'Para recibir en orden ascendente o descendente',enum: ['DESC','ASC'],required: false})
	@ApiQuery({name: 'page',required: false})
	@ApiQuery({name: 'limit',required: false})
	@ApiResponse({
		description: 'Respuesta en caso de obtener las mensajes exitosamente',
		status: 200,
		type: findAllPostForumMessagesDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findAll(
		@Param('idForum') idForum: string,
		@Query('page') page: string,
		@Query('limit') limit: string,
		@Query('createdAt') createdAt: string,
		@Res() res: Response
	) {
		try {
			const response = await this.postForumMessagesService.findAll(parseInt(idForum),{
				page: parseInt(page),
				limit: parseInt(limit),
				createdAt: createdAt
			})
			return res.status(200).json({
				code: 200,
				...response
			})
		} catch (error) {
			return responseError(error,res);
		}
	}
}
