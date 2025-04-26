import { HttpException, Injectable } from '@nestjs/common';
import { CreateComplaintStatusDto } from './dto/create-complaint-status.dto';
import { UpdateComplaintStatusDto } from './dto/update-complaint-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ComplaintStatus } from './entities/complaint-status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComplaintStatusesService {
	constructor(
		@InjectRepository(ComplaintStatus)
		private readonly complaintStatusRepository: Repository<ComplaintStatus>
	) { }

	create(createComplaintStatusDto: CreateComplaintStatusDto) {
		return 'This action adds a new complaintStatus';
	}

	findAll() {
		return `This action returns all complaintStatuses`;
	}

	async findOne(id: number) {
		const status = await this.complaintStatusRepository.findOne({
			where: {
				id: id
			}
		});
		if (!status){
			throw new HttpException('Ho se encontro del estado',404);
		}
		return status;
	}

	update(id: number, updateComplaintStatusDto: UpdateComplaintStatusDto) {
		return `This action updates a #${id} complaintStatus`;
	}

	remove(id: number) {
		return `This action removes a #${id} complaintStatus`;
	}
}
