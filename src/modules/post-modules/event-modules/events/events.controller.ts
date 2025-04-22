import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { EventsService } from './services/events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetEventsDto } from './dto/get-events.dto';
import { swaggerRes400 } from 'src/common/helpers/classes.dto';

@Controller('events')
export class EventsController {
	constructor(private readonly eventsService: EventsService) { }

	@Post()
	create(@Body() createEventDto: CreateEventDto) {
		return this.eventsService.create(createEventDto);
	}

	@Get()
	@ApiOperation({summary: 'Api para obtener todo s los eventos'})
	@ApiResponse({
		description: 'Salida en caso de obtener todo los eventos',
		status: 200,
		type: GetEventsDto
	})
	@ApiResponse(swaggerRes400())
	async findAll(@Res() res: Response) {
		try {
			const events = await this.eventsService.findAll();
			return res.status(200).json({
				code: 200,
				events: events
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.eventsService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
		return this.eventsService.update(+id, updateEventDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.eventsService.remove(+id);
	}
}
