import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { LogsService } from './services/logs.service';
import { UpdateLogDto } from './dto/update-log.dto';
import { ApiExcludeController, ApiExcludeEndpoint, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { FindAllLogsDto } from './dto/find-all-logs.dto';
import { swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';
import { FindAllLogEventsDto } from './dto/find-all-log-events.dto';

@ApiTags('Logs del usuario')
@Controller('logs')
export class LogsController {
	constructor(private readonly logsService: LogsService) { }

	@Get()
	@ApiOperation({summary: 'Api para obtener todos los logs del sistema'})
	@ApiQuery({name: 'idUser',required: false,description: 'Para filtrar for usuario'})
	@ApiQuery({name: 'idEvent',required: false,description: 'Para filtrar for evento'})
	@ApiQuery({name: 'createdAt',required: false,enum: ['DESC','ASC'],description: 'Para cambiar el orden'})
	@ApiQuery({name: 'page',required: false})
	@ApiQuery({name: 'limit',required: false})
	@ApiResponse({
		description: 'Respuesta en caso de obtener los logs exitosamente',
		status: 200,
		type: FindAllLogsDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findAll(
		@Query('idUser') idUser: string,
		@Query('idEvent') idEvent: string,
		@Query('createdAt') createdAt: string,
		@Query('limit') limit: string,
		@Query('page') page: string,
		@Res() res: Response
	) {
		try {
			const response = await this.logsService.findAll({
				idUser: parseInt(idUser),
				idEvent: parseInt(idEvent),
				createdAt: createdAt,
				limit: parseInt(limit),
				page: parseInt(page)
			})
			return res.status(200).json({
				code: 200,
				...response
			})
		} catch (error) {
			return responseError(error,res);
		}
	}


	@Get('/events')
	@ApiOperation({summary: 'Api para obtener todos eventos de log del sistema'})
	@ApiResponse({
		description: 'Respuesta en caso de obtener los eventos exitosamente',
		status: 200,
		type: FindAllLogEventsDto
	})
	async findAllEvents(@Res() res: Response) {
		try {
			const events = await this.logsService.findAllEvents()
			return res.status(200).json({
				code: 200,
				events
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

}
