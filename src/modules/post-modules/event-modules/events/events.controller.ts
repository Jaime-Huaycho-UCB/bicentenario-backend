import { Controller, Get, Post, Body, Param, Res, Put, Query, Delete } from '@nestjs/common';
import { EventsService } from './services/events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetEventsDto, GetOneEventDto } from './dto/get-events.dto';
import { DtoResponse, swaggerRes400, swaggerRes404 } from 'src/common/helpers/classes.dto';

@ApiTags('Eventos')
@Controller('events')
export class EventsController {
	constructor(private readonly eventsService: EventsService) { }

	@Post()
	@ApiOperation({summary: 'Api para crear eventos'})
	@ApiResponse({
		description: 'Salida en caso de crear exitosamente un evento',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes404())
	async create(@Body() data: CreateEventDto,@Res() res: Response) {
		try {
			const response = await this.eventsService.create(data);
			return res.status(200).json({
				code: 200,
				message: response
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Get()
	@ApiOperation({summary: 'Api para obtener todo s los eventos'})
	@ApiQuery({name: 'search',required: false})
	@ApiQuery({name: 'page',required: false})
	@ApiQuery({name: 'limit',required: false})
	@ApiQuery({name: 'createdAt',required: false,enum: ['DESC','ASC']})
	@ApiResponse({
		description: 'Salida en caso de obtener todo los eventos',
		status: 200,
		type: GetEventsDto
	})
	@ApiResponse(swaggerRes404())
	async findAll(
		@Query('page') page: string,
		@Query('limit') limit: string,
		@Query('search') search: string,
		@Query('createdAt') createdAt: string,
		@Res() res: Response
	) {
		try {
			const response = await this.eventsService.findAll({
				page: parseInt(page),
				limit: parseInt(limit),
				search: search
			});
			return res.status(200).json({
				code: 200,
				...response
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Get(':id')
	@ApiOperation({summary: 'Api para obtener un evento'})
	@ApiParam({ name: 'id', required: true, description: 'Id del evento a obtener' })
	@ApiResponse({
		description: 'Salida en caso de obtner exitosamente el evento',
		status: 200,
		type: GetOneEventDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes404())
	async findOne(@Param('id') id: string,@Res() res: Response) {
		try {
			const event = await this.eventsService.findOne(parseInt(id),{
				relations: {
					city: true
				}
			});
			return res.status(200).json({
				code: 200,
				event: event
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Put(':id')
	@ApiOperation({summary: 'Api para actualizar eventos'})
	@ApiParam({ name: 'id', required: true, description: 'Id del evento a actualizar' })
	@ApiResponse({
		description: 'Salida en cado de actualizar exitosamente el evento',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes404())
	async update(@Param('id') id: string, @Body() data: UpdateEventDto,@Res() res: Response) {
		try {
			const response = await this.eventsService.update(parseInt(id),data);
			return res.status(200).json({
				code: 200,
				message: response
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Delete(':idEvent')
	@ApiOperation({summary: 'Api para eliminar eventos'})
	@ApiParam({ name: 'idEvent', required: true, description: 'Id del evento a eliminar' })
	@ApiResponse({
		description: 'Salida en cado de eliminar exitosamente el evento',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes404())
	async remove(@Param('idEvent') id: string,@Res() res: Response) {
		try {
			const eventUpdated = await this.eventsService.remove(parseInt(id));
			return res.status(200).json({
				code: 200,
				message: 'El evento se elimino exitosamente'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}
}
