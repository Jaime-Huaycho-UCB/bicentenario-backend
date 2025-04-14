import { Injectable } from '@nestjs/common';
import { CreatePostForumDto } from './dto/create-post-forum.dto';
import { UpdatePostForumDto } from './dto/update-post-forum.dto';

@Injectable()
export class PostForumsService {
  create(createPostForumDto: CreatePostForumDto) {
    return 'This action adds a new postForum';
  }

  findAll() {
    return `This action returns all postForums`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postForum`;
  }

  update(id: number, updatePostForumDto: UpdatePostForumDto) {
    return `This action updates a #${id} postForum`;
  }

  remove(id: number) {
    return `This action removes a #${id} postForum`;
  }
}
