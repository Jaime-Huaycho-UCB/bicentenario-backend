import { Injectable } from '@nestjs/common';
import { CreateEventForumMessageDto } from '../dto/create-event-forum-message.dto';
import { EventForumMessage } from '../entities/event-forum-message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EventForumMessagesValidator } from './event-forum-messages.validator';
import { Repository } from 'typeorm';
import { EventForumsService } from '../../event-forums/services/event-forums.service';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';

@Injectable()
export class EventForumMessagesService {
	constructor(
		@InjectRepository(EventForumMessage)
		private readonly eventForumMessageRepository: Repository<EventForumMessage>,
		private readonly eventForumMessagesValidator: EventForumMessagesValidator,
		private readonly eventForumsService: EventForumsService,
		private readonly usersService: UsersService
	) { }

	async create(data: CreateEventForumMessageDto) {
		this.eventForumMessagesValidator.validateCreate(data);
		const user = await this.usersService.getAUserById(data.idUser);
		const forum = await this.eventForumsService.findOne(data.idForum);
		const message = new EventForumMessage();
		message.user = user!;
		message.forum = forum!;
		message.content = data.content;
		const messageSaved = await this.eventForumMessageRepository.save(message);
		return messageSaved;
	}

	async findAll(idForum: number, filters: {
		page?: number,
		limit?: number,
		createdAt?: string
	} = {}) {
		const forum = await this.eventForumsService.findOne(idForum);
		const page = isNaN(Number(filters.page)) ? 1 : Number(filters.page);
		const limit = isNaN(Number(filters.limit)) ? 10 : Number(filters.limit);
		const skip = (page - 1) * limit;
		const [messages, total] = await this.eventForumMessageRepository.findAndCount({
			where: {
				forum: {
					id: forum!.id
				}
			},
			relations: {
				user: true
			},
			order: {
				...(filters.createdAt ? {
					createdAt: (filters.createdAt === 'ASC' ? 'ASC' : 'DESC')
				} : {
					createdAt: 'DESC'
				})
			},
			skip: skip,
			take: limit,
			select: {
				id: true,
				content: true,
				user: {
					id: true,
					name: true
				},
				createdAt: true
			}
		});
		this.eventForumMessagesValidator.validateMessages(messages);
		return {
			messages: messages,
			total: total,
			page: page,
			limit: limit,
			pages: Math.ceil(total / limit)
		};
	}
}
