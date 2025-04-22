import { Injectable } from '@nestjs/common';
import { CreateCityDto } from '../dto/create-city.dto';
import { UpdateCityDto } from '../dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from '../entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {
	constructor(
		@InjectRepository(City)
		private readonly cityRepository: Repository<City>
	) { }

	create(createCityDto: CreateCityDto) {
		return 'This action adds a new city';
	}

	findAll() {
		return `This action returns all cities`;
	}

	async findOne(id: number) {
		const city = await this.cityRepository.findOne({
			where: {
				id: id
			}
		})
		return city;
	}

	update(id: number, updateCityDto: UpdateCityDto) {
		return `This action updates a #${id} city`;
	}

	remove(id: number) {
		return `This action removes a #${id} city`;
	}
}
