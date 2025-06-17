import { Injectable } from '@nestjs/common';
import { CreateObjectsComplaintDto } from './dto/create-objects-complaint.dto';
import { UpdateObjectsComplaintDto } from './dto/update-objects-complaint.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectsComplaint } from './entities/objects-complaint.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ObjectsComplaintsService {
	constructor(
		@InjectRepository(ObjectsComplaint)
		private readonly objectsComplaintRepository: Repository<ObjectsComplaint>
	) { }

	create(createObjectsComplaintDto: CreateObjectsComplaintDto) {
		return 'This action adds a new objectsComplaint';
	}

	async findAll() {
		const types = await this.objectsComplaintRepository.find();
		return types;
	}

	async findOne(id: number) {
		const objectType = await this.objectsComplaintRepository.findOne({
			where: {
				id: id
			}
		});
		return objectType;
	}

	update(id: number, updateObjectsComplaintDto: UpdateObjectsComplaintDto) {
		return `This action updates a #${id} objectsComplaint`;
	}

	remove(id: number) {
		return `This action removes a #${id} objectsComplaint`;
	}
}
