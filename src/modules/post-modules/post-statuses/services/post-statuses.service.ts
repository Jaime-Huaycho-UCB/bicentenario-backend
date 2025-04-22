import { Injectable } from '@nestjs/common';
import { CreatePostStatusDto } from '../dto/create-post-status.dto';
import { UpdatePostStatusDto } from '../dto/update-post-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostStatus } from '../entities/post-status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostStatusesService {
	constructor(
		@InjectRepository(PostStatus)
		private readonly postStatusRepository: Repository<PostStatus>
	) { }

	create(createPostStatusDto: CreatePostStatusDto) {
		return 'This action adds a new postStatus';
	}

	findAll() {
		return `This action returns all postStatuses`;
	}

	async findOne(id: number) {
		const status = await this.postStatusRepository.findOne({
			where: {
				id: id
			}
		})
		return status;
	}

	update(id: number, updatePostStatusDto: UpdatePostStatusDto) {
		return `This action updates a #${id} postStatus`;
	}

	remove(id: number) {
		return `This action removes a #${id} postStatus`;
	}
}
