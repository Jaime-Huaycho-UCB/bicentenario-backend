import { Injectable } from '@nestjs/common';
import { CreateHistoryPostDto } from './dto/create-history-post.dto';
import { UpdateHistoryPostDto } from './dto/update-history-post.dto';

@Injectable()
export class HistoryPostsService {
  create(createHistoryPostDto: CreateHistoryPostDto) {
    return 'This action adds a new historyPost';
  }

  findAll() {
    return `This action returns all historyPosts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historyPost`;
  }

  update(id: number, updateHistoryPostDto: UpdateHistoryPostDto) {
    return `This action updates a #${id} historyPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} historyPost`;
  }
}
