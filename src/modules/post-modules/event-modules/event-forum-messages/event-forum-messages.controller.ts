import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res } from '@nestjs/common';
import { EventForumMessagesService } from './services/event-forum-messages.service';
import { CreateEventForumMessageDto } from './dto/create-event-forum-message.dto';
import { UpdateEventForumMessageDto } from './dto/update-event-forum-message.dto';
import { ApiOperation, ApiResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';
import { responseError } from 'src/common/helpers/out.helper';
import { findAllEventForumMessagesDto } from './dto/find-all-event-forum-messages.dto';
import { Response } from 'express';

@ApiTags('Mensajes de foro de eventos')
@Controller('event-forum-messages')
export class EventForumMessagesController {
	constructor(private readonly eventForumMessagesService: EventForumMessagesService) { }

	// @UseGuards(AuthGuard)
	@Post()
	@ApiOperation({ summary: 'Api para crear mensajes de un foro' })
	@ApiResponse({
		description: 'Respuesta en caso de crear un mensajes exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async create(@Body() data: CreateEventForumMessageDto, @Res() res: Response) {
		try {
			const messageSaved = await this.eventForumMessagesService.create(data);
			return res.status(200).json({
				code: 200,
				message: 'Se creo exitosamente el mensaje'
			})
		} catch (error) {
			return responseError(error, res);
		}
	}

	// @UseGuards(AuthGuard)
	@Get(':idForum')
	@ApiOperation({ summary: 'Api para obtener los mensajes de un foro' })
	@ApiQuery({ name: 'createdAt', description: 'Para recibir en orden ascendente o descendente', enum: ['DESC', 'ASC'], required: false })
	@ApiQuery({ name: 'page', required: false })
	@ApiQuery({ name: 'limit', required: false })
	@ApiResponse({
		description: 'Respuesta en caso de obtener las mensajes exitosamente',
		status: 200,
		type: findAllEventForumMessagesDto
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
			const response = await this.eventForumMessagesService.findAll(parseInt(idForum), {
				page: parseInt(page),
				limit: parseInt(limit),
				createdAt: createdAt
			})
			return res.status(200).json({
				code: 200,
				...response
			})
		} catch (error) {
			return responseError(error, res);
		}
	}
}
