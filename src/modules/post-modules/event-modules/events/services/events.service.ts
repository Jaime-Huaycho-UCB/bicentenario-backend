import { Injectable } from '@nestjs/common';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
	constructor(
		@InjectRepository(Event)
		private readonly eventRepository: Repository<Event>
	) { }

	create(createEventDto: CreateEventDto) {
		return 'This action adds a new event';
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
		return events;
	}

	async findOne(id: number) {
		const event = await this.eventRepository.findOne({
			where: {
				id: id
			}
		});
		return event;
	}

	update(id: number, updateEventDto: UpdateEventDto) {
		return `This action updates a #${id} event`;
	}

	remove(id: number) {
		return `This action removes a #${id} event`;
	}
}
