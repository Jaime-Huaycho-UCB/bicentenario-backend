import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolsService {
	constructor(
		@InjectRepository(Rol)
		private readonly rolRepository: Repository<Rol>
	){}

	async findAll() {
		const rols = await this.rolRepository.find();

		return rols;
	}

	async findOne(idRol: number) {
		const rol = await this.rolRepository.findOne({
			where: {
				id: idRol
			}
		})
		return rol;
	}

	update(id: number, updateRolDto: UpdateRolDto) {
		return `This action updates a #${id} rol`;
	}

	remove(id: number) {
		return `This action removes a #${id} rol`;
	}
}
