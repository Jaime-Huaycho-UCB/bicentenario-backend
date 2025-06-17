import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res } from '@nestjs/common';
import { EventForumsService } from './services/event-forums.service';
import { CreateEventForumDto } from './dto/create-event-forum.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';
import { responseError } from 'src/common/helpers/out.helper';
import { FindAllEventForumsDto } from './dto/find-all-event-forum.dto';

@ApiTags('Foros de eventos')
@Controller('event-forums')
export class EventForumsController {
	constructor(private readonly eventForumsService: EventForumsService) { }

	// @UseGuards(AuthGuard)
	@Post()
	@ApiOperation({ summary: 'Api para crear un foro para un evento' })
	@ApiResponse({
		description: 'Respuesta en caso de crear un foto exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async create(@Body() data: CreateEventForumDto, @Res() res: Response) {
		try {
			const forums = await this.eventForumsService.create(data);
			return res.status(200).json({
				code: 200,
				message: 'Se creo el foro exitosamente'
			})
		} catch (error) {
			return responseError(error, res);
		}
	}

	// @UseGuards(AuthGuard)
	@Get()
	@ApiOperation({ summary: 'Api para obtener los foros' })
	@ApiQuery({name: 'idEvent',description: 'Para filtrar por evento',required: false})
	@ApiQuery({ name: 'idUser', description: 'Filtrar por usuario, util para obtener los foros creados por un usuario', required: false })
	@ApiQuery({name: 'search',description: 'Para buscar por titulo',required: false})
	@ApiQuery({name: 'page',description: 'Pagina',required: false})
	@ApiQuery({name: 'limit',description: 'Lite de foros de retorno',required: false})
	@ApiQuery({name: 'createdAt',description: 'Devolver por orden',required: false,enum: ['DESC','ASC']})
	@ApiResponse({
		description: 'Respuesta en caso de obtener los fotos exitosamente',
		status: 200,
		type: FindAllEventForumsDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findAll(
		@Query('idEvent') idEvent: string,
		@Query('idUser') idUser: string,
		@Query('page') page: string,
		@Query('limit') limit: string,
		@Query('search') search: string,
		@Query('createdAt') createdAt: string,
		@Res() res: Response
	) {
		try {
			const response = await this.eventForumsService.findAll({
				idEvent: parseInt(idEvent),
				idUser: parseInt(idUser),
				search: search,
				page: parseInt(page),
				limit: parseInt(limit),
				createdAt: createdAt
			});
			return res.status(200).json({
				code: 200,
				...response
			})
		} catch (error) {
			return responseError(error, res);
		}
	}

	// @UseGuards(AuthGuard)
	@Delete(':idForum')
	@ApiOperation({ summary: 'Api para deliminar un foro para un evento' })
	@ApiResponse({
		description: 'Respuesta en caso de eliminar un foto exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async remove(@Param('idForum') idForum: string, @Res() res: Response) {
		try {
			const forumUpdated = await this.eventForumsService.remove(parseInt(idForum));
			return res.status(200).json({
				code: 200,
				message: 'Se elimino el foro exitosamente'
			})
		} catch (error) {
			return responseError(error, res);
		}
	}
}
