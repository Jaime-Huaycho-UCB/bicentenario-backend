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
	@Get(':idEvent')
	@ApiOperation({ summary: 'Api para obtener los foros' })
	@ApiQuery({ name: 'idUser', description: 'Filtrar por usuario, util para obtener los foros creados por un usuario', required: false })
	@ApiResponse({
		description: 'Respuesta en caso de obtener los fotos exitosamente',
		status: 200,
		type: FindAllEventForumsDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findAll(
		@Param('idEvent') idEvent: string,
		@Query('idUser') idUser: string,
		@Res() res: Response
	) {
		try {
			const forums = await this.eventForumsService.findAll({
				idEvent: parseInt(idEvent),
				idUser: parseInt(idUser)
			});
			return res.status(200).json({
				code: 200,
				forums: forums
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
