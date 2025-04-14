import { Injectable } from '@nestjs/common';
import { CreatePostForumMessageDto } from './dto/create-post-forum-message.dto';
import { UpdatePostForumMessageDto } from './dto/update-post-forum-message.dto';

@Injectable()
export class PostForumMessagesService {
  create(createPostForumMessageDto: CreatePostForumMessageDto) {
    return 'This action adds a new postForumMessage';
  }

  findAll() {
    return `This action returns all postForumMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postForumMessage`;
  }

  update(id: number, updatePostForumMessageDto: UpdatePostForumMessageDto) {
    return `This action updates a #${id} postForumMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} postForumMessage`;
  }
}
