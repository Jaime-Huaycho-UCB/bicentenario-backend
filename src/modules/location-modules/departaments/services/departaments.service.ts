import { Injectable } from '@nestjs/common';
import { CreateDepartamentDto } from '../dto/create-departament.dto';
import { UpdateDepartamentDto } from '../dto/update-departament.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Departament } from '../entities/departament.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartamentsService {
	constructor(
		@InjectRepository(Departament)
		private readonly departamentRepository: Repository<Departament>
	) { }
	create(createDepartamentDto: CreateDepartamentDto) {
		return 'This action adds a new departament';
	}

	async findAll() {
		const departaments = await this.departamentRepository.find({
			relations: {
				cities: true
			},
			order: {
				name: 'ASC',
				cities: {
					name: 'ASC'
				}
			}
		})
		return departaments;
	}

	findOne(id: number) {
		return `This action returns a #${id} departament`;
	}

	update(id: number, updateDepartamentDto: UpdateDepartamentDto) {
		return `This action updates a #${id} departament`;
	}

	remove(id: number) {
		return `This action removes a #${id} departament`;
	}
}
