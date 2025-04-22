import { Injectable } from '@nestjs/common';
import { CreateFileDto } from '../dto/create-file.dto';
import { UpdateFileDto } from '../dto/update-file.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from '../entities/files.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilesService {
	constructor(
		@InjectRepository(File)
		private readonly fileRepository: Repository<File>
	){}

	async create(data: CreateFileDto) {
		const file = new File();
        file.name = data.name;
        file.route = data.route;
        file.type = data.type;
        file.size = data.size;
        file.isDeleted = false;
        const fileSaved = await this.fileRepository.save(file);
        return fileSaved;
	}

	findAll() {
		return `This action returns all file`;
	}

	findOne(id: number) {
		return `This action returns a #${id} file`;
	}

	update(id: number, updateFileDto: UpdateFileDto) {
		return `This action updates a #${id} file`;
	}

	remove(id: number) {
		return `This action removes a #${id} file`;
	}
}
