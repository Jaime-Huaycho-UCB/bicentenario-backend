import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateResearcherApplicationDto } from '../dto/create-researcher-application.dto';
import { UpdateResearcherApplicationDto } from '../dto/update-researcher-application.dto';
import { ResearcherApplication } from '../entities/researcher-application.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../../users/services/users.service';
import { ResearcherApplicationsValidator } from './researcher-applications.validator';

@Injectable()
export class ResearcherApplicationsService {
	constructor(
		@InjectRepository(ResearcherApplication)
		private readonly researcherApplicationRepository: Repository<ResearcherApplication>,
		private readonly researcherApplicationsValidator: ResearcherApplicationsValidator,
		private readonly usersService: UsersService
	) { }

	async create(data: CreateResearcherApplicationDto) {

		this.researcherApplicationsValidator.validateCreateResearcherApplication(data);
		const user = await this.usersService.getAUserById(data.idUser);
		const applicationPending = await this.findOneByUser(user!.id, 0);
		if (applicationPending) {
			throw new HttpException('El usuario ya tiene una solicitud pendiente, espere hasta tener una respuesta', HttpStatus.BAD_REQUEST);
		}
		const applicationApproved = await this.findOneByUser(user!.id, 1);
		if (applicationApproved) {
			throw new HttpException('El usuario ya tiene la solicitud aprobada, no puede volver a enviar otra', HttpStatus.BAD_REQUEST);
		}
		const application = new ResearcherApplication();
		application.user = user!;
		application.justification = data.justification;
		const applicationSaved = await this.researcherApplicationRepository.save(application);
		return applicationSaved;
	}

	async findAll(filters: {
		status?: number
	} = {}) {
		const applications = await this.researcherApplicationRepository.find({
			where: {
				...(filters.status !== undefined && !isNaN(Number(filters.status)) ? {
					status: Number(filters.status)
				} : {})
			},
			relations: {
				user: true
			},
			select: {
				id: true,
				justification: true,
				status: true,
				user: {
					id: true,
					name: true,
				},
				createdAt: true
			}
		})
		this.researcherApplicationsValidator.validateResearcherApplications(applications);
		return applications;
	}

	async findOne(idApplication: number, status: number = NaN) {
		this.researcherApplicationsValidator.validateIdApplication(idApplication);
		const application = await this.researcherApplicationRepository.findOne({
			where: {
				id: idApplication,
				...(isNaN(status) ? {} : {
					status: status
				}),
			},
			relations: {
				user: true
			},
			select: {
				id: true,
				justification: true,
				status: true,
				user: {
					id: true,
					name: true,
				},
				createdAt: true
			}
		})
		this.researcherApplicationsValidator.validateResearcherApplication(application);
		return application;
	}

	async findOneByUser(idUser: number, status: number = NaN) {
		const application = await this.researcherApplicationRepository.findOne({
			where: {
				user: {
					id: idUser
				},
				...(isNaN(status) ? {} : {
					status: status
				})
			},
			relations: {
				user: true
			},
			select: {
				id: true,
				justification: true,
				status: true,
				user: {
					id: true,
					name: true,
				},
				createdAt: true
			}
		})
		return application;
	}

	async approve(idApplication: number) {
		const application = await this.findOne(idApplication, 0);
		if (application!.status === 1) {
			throw new HttpException('La peticion ya fue aceptada anteriormente', HttpStatus.BAD_REQUEST);
		}
		const userUpdated = await this.usersService.changeRol(application!.user.id, 3);
		application!.status = 1;
		const applicationApprove = await this.researcherApplicationRepository.save(application!);
		return applicationApprove;
	}

	async decline(idApplication: number) {
		const application = await this.findOne(idApplication, 0);
		if (application!.status === -1) {
			throw new HttpException('La peticion ya fue rechazada anteriormente', HttpStatus.BAD_REQUEST);
		}
		application!.status = -1;
		const applicationUpdated = await this.researcherApplicationRepository.save(application!);
		return applicationUpdated;
	}

}
