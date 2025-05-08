import { Controller, Get, Post, Body, Param, Res, Put, Query } from '@nestjs/common';
import { EventsService } from './services/events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { GetEventsDto, GetOneEventDto } from './dto/get-events.dto';
import { DtoResponse, swaggerRes400, swaggerRes404 } from 'src/common/helpers/classes.dto';

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
	@ApiResponse({
		description: 'Salida en caso de obtener todo los eventos',
		status: 200,
		type: GetEventsDto
	})
	@ApiResponse(swaggerRes404())
	async findAll(
		@Query('page') page: string,
		@Query('limit') limit: string,
		@Res() res: Response
	) {
		try {
			const response = await this.eventsService.findAll({
				page: parseInt(page),
				limit: parseInt(limit)
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
}
