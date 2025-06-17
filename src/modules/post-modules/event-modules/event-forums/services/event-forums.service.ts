import { Injectable } from '@nestjs/common';
import { CreateEventForumDto } from '../dto/create-event-forum.dto';
import { UpdateEventForumDto } from '../dto/update-event-forum.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EventForum } from '../entities/event-forum.entity';
import { Like, Repository } from 'typeorm';
import { EventForumsValidator } from './event-forums.validator';
import { PostsService } from 'src/modules/post-modules/posts/services/posts.service';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';
import { EventsService } from '../../events/services/events.service';

@Injectable()
export class EventForumsService {
	constructor(
		@InjectRepository(EventForum)
		private readonly eventForumRepository: Repository<EventForum>,
		private readonly eventForumsValidator: EventForumsValidator,
		private readonly usersService: UsersService,
		private readonly eventsService: EventsService
	) { }
	async create(data: CreateEventForumDto) {
			this.eventForumsValidator.validateCreate(data);
			const user = await this.usersService.getAUserById(data.idUser);
			const event = await this.eventsService.findOne(data.idEvent);
			const forum = new EventForum();
			forum.user = user!;
			forum.event = event!;
			forum.title = data.title;
			forum.description = data.description;
			const forumSaved = await this.eventForumRepository.save(forum);
			return forumSaved;
		}
	
		async findAll(filters: {
			idUser?: number,
			idEvent?: number,
			search?: string,
			page?: number,
			limit?: number,
			createdAt?: string
		} = {}) {
			const page = isNaN(Number(filters.page)) ? 1 : Number(filters.page);
			const limit = isNaN(Number(filters.limit)) ? 10 : Number(filters.limit);
			const skip = (page - 1) * limit;
			const [forums,total] = await this.eventForumRepository.findAndCount({
				where: {
					isDeleted: false,
					...(filters.idEvent !== undefined && !isNaN(Number(filters.idEvent)) ? {
						event: {
							id: filters.idEvent
						}
					} : {}),
					...(filters.idUser !== undefined && !isNaN(filters.idUser) ? {
						user: {
							id: filters.idUser
						}
					} : {}),
					...(filters.search ? {
						title: Like(`%${filters.search.trim()}%`)
					} : {})
				},
				relations: {
					user: true
				},
				select: {
					id: true,
					title: true,
					description: true,
					createdAt: true,
					user: {
						id: true,
						name: true
					}
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
			this.eventForumsValidator.validateForums(forums);
			return {
				forums: forums,
				total: total,
				page: page,
				limit: limit,
				pages: Math.ceil(total / limit)
			};
		}
	
		async findOne(idForum: number,relations: {
			user?: boolean
		} = {}) {
			this.eventForumsValidator.validateIdForum(idForum);
			const forum = await this.eventForumRepository.findOne({
				where: {
					isDeleted: false,
					id: idForum
				},
				relations: {
					...(relations.user ? {
						user: true
					}:{})
				},
				select: {
					id: true,
					title: true,
					description: true,
					createdAt: true,
					...(relations.user ? {
						user: {
							id: true,
							name: true
						}
					}:{})
				},
			})
			this.eventForumsValidator.validateForum(forum);
			return forum;
		}
	
		async update(idForum: number, data: UpdateEventForumDto) {
			const forum = await this.findOne(idForum);
			let c=0;
			if (data.title && data.title != forum!.title){
				forum!.title = data.title;
				c+=1;
			}
			if (data.description && data.description != forum!.description){
				forum!.description = data.description;
				c+=1;
			}
			if (c==0){
				return forum;
			}
			return await this.eventForumRepository.save(forum!);
		}
	
		async remove(idForum: number) {
			const forum = await this.findOne(idForum);
			forum!.isDeleted = true;
			const forumUpdated = await this.eventForumRepository.save(forum!);
			return forumUpdated;
		}
}
