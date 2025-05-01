import { Injectable } from '@nestjs/common';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { Repository } from 'typeorm';
import { CitiesService } from 'src/modules/location-modules/cities/services/cities.service';
import { EventsValidator } from './events.validator';

@Injectable()
export class EventsService {
	constructor(
		@InjectRepository(Event)
		private readonly eventRepository: Repository<Event>,
		private readonly eventsValidator: EventsValidator,
		private readonly citiesService: CitiesService,
		
	) { }

	async create(data: CreateEventDto) {
		this.eventsValidator.validateCreateEvent(data);
		const city = await this.citiesService.findOne(data.idCity);
		const event = new Event();
		event.title = data.title;
		event.description = data.description;
		event.content = data.content;
		event.city = city!;
		await this.eventRepository.save(event);
		return 'Se creo el evento exitosamente';
	}

	async findAll() {
		const events = await this.eventRepository.find({
			relations: {
				city: {
					departament: true
				}
			},
			order: {
				createdAt: 'DESC'
			}
		})
		this.eventsValidator.validateEvents(events);
		return events;
	}

	async findOne(id: number,filters = {
		relations: {
			city: false
		}
	}) {
		this.eventsValidator.validateId(id);
		const event = await this.eventRepository.findOne({
			where: {
				id: id
			},
			relations: {
				city: {
					departament: filters.relations.city
				}
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
}
