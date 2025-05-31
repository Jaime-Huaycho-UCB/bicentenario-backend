import { Injectable } from '@nestjs/common';
import { CreateLogDto } from '../dto/create-log.dto';
import { UpdateLogDto } from '../dto/update-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from '../entities/log.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';
import { LogsValidator } from './logs.validator';
import { number } from 'joi';

const logEvents = [
	{
		id: 1,
		name: 'insert'
	}, {
		id: 2,
		name: 'update'
	}, {
		id: 3,
		name: 'delete'
	}, {
		id: 4,
		name: 'get',
	}, {
		id: 5,
		name: 'login'
	}, {
		id: 6,
		name: 'register'
	}, {
		id: 7,
		name: 'interaction'
	}
];

@Injectable()
export class LogsService {
	constructor(
		@InjectRepository(Log)
		private readonly logRepository: Repository<Log>,
		private readonly logsValidator: LogsValidator,
		private readonly usersService: UsersService
	) { }

	async create(data: CreateLogDto) {
		this.logsValidator.validateCreate(data);
		let user;
		if (data.user instanceof number){
			user = await this.usersService.getAUserById(Number(data.user));
		}else{
			user = data.user;
		}
		const log = new Log();
		log.user = user!;
		log.event = data.idEvent;
		log.description = data.description;
		return await this.logRepository.save(log);
	}

	async findAllEvents() {
		const events = logEvents;
		return events;
	}

	async existEvent(idEvent: number){
		for (let i=0;i<logEvents.length;i++){
			if (logEvents[i].id === idEvent){
				return true;
			}
		}
		return false;
	}

	async findAll(filters: {
		idUser?: number,
		idEvent?: number,
		createdAt?: string,
		limit?: number,
		page?: number
	} = {}) {
		if (filters.idEvent !== undefined && !isNaN(filters.idEvent)){
			const event = await this.findOneEvent(filters.idEvent);
			this.logsValidator.validateEvent(event);
		}
		const page = isNaN(Number(filters.page)) ? 1 : Number(filters.page);
		const limit = isNaN(Number(filters.limit)) ? 10 : Number(filters.limit);
		const skip = (page - 1) * limit;
		const [logs, total] = await this.logRepository.findAndCount({
			where: {
				...(filters.idUser !== undefined && !isNaN(Number(filters.idUser)) ? {
					user: {
						id: filters.idUser
					}
				}:{}),
				...(filters.idEvent !== undefined && !isNaN(filters.idEvent) ? {
					event: filters.idEvent
				}:{})
			},
			relations: {
				user: true
			},
			select: {
				id: true,
				event: true,
				description: true,
				user: {
					id: true,
					name: true
				},
				createdAt: true
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
		})
		this.logsValidator.validateLogs(logs);
		let logsEnd: any = [];
		logs.map((log) => {
			logsEnd.push({
				id: log.id,
				event: logEvents[log.event - 1],
				user: log.user,
				description: log.description,
				createdAt: log.createdAt
			})
		})
		return {
			logs: logsEnd,
			total: total,
			page: page,
			limit: limit,
			pages: Math.ceil(total / limit)
		};
	}

	async findOneEvent(idEvent: number){
		let event;
		for (let i=0;i<logEvents.length;i++){
			if (logEvents[i].id === idEvent){
				return logEvents[i];
			}
		}
		return event;
	}

	findOne(id: number) {
		return `This action returns a #${id} log`;
	}

	update(id: number, updateLogDto: UpdateLogDto) {
		return `This action updates a #${id} log`;
	}

	remove(id: number) {
		return `This action removes a #${id} log`;
	}
}
