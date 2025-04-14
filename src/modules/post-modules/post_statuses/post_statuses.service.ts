import { Injectable } from '@nestjs/common';
import { CreatePostStatusDto } from './dto/create-post_status.dto';
import { UpdatePostStatusDto } from './dto/update-post_status.dto';

@Injectable()
export class PostStatusesService {
  create(createPostStatusDto: CreatePostStatusDto) {
    return 'This action adds a new postStatus';
  }

  findAll() {
    return `This action returns all postStatuses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postStatus`;
  }

  update(id: number, updatePostStatusDto: UpdatePostStatusDto) {
    return `This action updates a #${id} postStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} postStatus`;
  }
}
