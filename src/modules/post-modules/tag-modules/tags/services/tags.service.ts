import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dto/create-tag.dto';
import { UpdateTagDto } from '../dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from '../entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
	constructor(
		@InjectRepository(Tag)
		private readonly tagRespository: Repository<Tag>
	){}

	async create(data: CreateTagDto) {
		const tag = new Tag();
		tag.name = data.name;
		const tagSaved = await this.tagRespository.save(tag);
		return tagSaved;
	}

	async findAll() {
		const tags = await this.tagRespository.find({
			order: {
				name: 'ASC'
			}
		})
		return tags;
	}

	async findOne(id: number) {
		const tag = await this.tagRespository.findOne({
			where: {
				id: id
			}
		})
		return tag;
	}

	update(id: number, updateTagDto: UpdateTagDto) {
		return `This action updates a #${id} tag`;
	}

	remove(id: number) {
		return `This action removes a #${id} tag`;
	}
}
