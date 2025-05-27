import { Injectable } from '@nestjs/common';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { Like, Repository } from 'typeorm';
import { CitiesService } from 'src/modules/location-modules/cities/services/cities.service';
import { EventsValidator } from './events.validator';
import { FilesService } from 'src/modules/files/services/files.service';
import { title } from 'process';

@Injectable()
export class EventsService {
	constructor(
		@InjectRepository(Event)
		private readonly eventRepository: Repository<Event>,
		private readonly eventsValidator: EventsValidator,
		private readonly citiesService: CitiesService,
		private readonly filesService: FilesService
	) { }

	async create(data: CreateEventDto) {
		this.eventsValidator.validateCreateEvent(data);
		const city = await this.citiesService.findOne(data.idCity)
		const event = new Event();
		event.title = data.title;
		event.description = data.description;
		event.content = data.content;
		event.city = city!;
		if (data.fileData){
			event.file = await this.filesService.create(data.fileData);;
		}
		await this.eventRepository.save(event);
		return 'Se creo el evento exitosamente';
	}

	async findAll(filters: {
		search?: string,
		page?: number,
		limit?: number,
		createdAt?: string
	} = {}) {
		const page = isNaN(Number(filters.page)) ? 1 : Number(filters.page);
		const limit = isNaN(Number(filters.limit)) ? 10 : Number(filters.limit);
		const skip = (page - 1) * limit;
		const [events,total] = await this.eventRepository.findAndCount({
			where: {
				isDeleted: false,
				...(filters.search ? {
					title: Like(`%${filters.search.trim()}%`)
				}:{})
			},
			relations: {
				city: {
					departament: true
				},
				file: true
			},
			order: {
				...(filters.createdAt ? {
					createdAt: (filters.createdAt === 'ASC' ? 'ASC' : 'DESC')
				}:{
					createdAt: 'DESC'
				})
			},
			skip: skip,
			take: limit
		})
		this.eventsValidator.validateEvents(events);
		return {
			events: events,
			total: total,
			page: page,
			limit: limit,
			pages: Math.ceil(total / limit)
		};
	}

	async findOne(id: number,filters = {
		relations: {
			city: false
		}
	}) {
		this.eventsValidator.validateId(id);
		const event = await this.eventRepository.findOne({
			where: {
				isDeleted: false,
				id: id
			},
			relations: {
				city: {
					departament: filters.relations.city
				},
				file: true
			}
		});
		this.eventsValidator.validateEvent(event);
		return event;
	}

	async update(id: number, data: UpdateEventDto) {		
		const event = await this.findOne(id);
		if (data.title){
			event!.title = data.title;
		}
		if (data.description){
			event!.description = data.description;
		}
		if (data.content){
			event!.content = data.content;
		}
		if (data.idCity){
			event!.city = (await this.citiesService.findOne(data.idCity))!;
		}
		await this.eventRepository.save(event!);
		return 'Se actualizo exitosamente el evento';
	}
	async remove(idEvent: number){
		const event = await this.findOne(idEvent);
		event!.isDeleted = true;
		const eventUpdated = await this.eventRepository.save(event!);
		return eventUpdated
	}
}
