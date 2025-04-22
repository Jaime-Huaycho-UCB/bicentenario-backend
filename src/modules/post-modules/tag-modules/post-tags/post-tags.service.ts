import { Injectable } from '@nestjs/common';
import { CreatePostTagDto } from './dto/create-post-tag.dto';
import { UpdatePostTagDto } from './dto/update-post-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostTag } from './entities/post-tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostTagsService {
	constructor(
		@InjectRepository(PostTag)
		private readonly postTagRepository: Repository<PostTag>
	) { }

	async create(idPost, data: number[]) {
		const postTags: any[] = [];
		data.map((tag) => {
			postTags.push({
				post: {
					id: idPost
				},
				tag: {
					id: tag
				}
			})
		});
		const postTagsSaved = await this.postTagRepository.save(postTags);
		return postTagsSaved;
	}

	findAll() {
		return `This action returns all postTags`;
	}

	findOne(id: number) {
		return `This action returns a #${id} postTag`;
	}

	update(id: number, updatePostTagDto: UpdatePostTagDto) {
		return `This action updates a #${id} postTag`;
	}

	remove(id: number) {
		return `This action removes a #${id} postTag`;
	}
}
