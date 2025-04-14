import { Injectable } from '@nestjs/common';
import { CreatePostStartDto } from './dto/create-post_start.dto';
import { UpdatePostStartDto } from './dto/update-post_start.dto';

@Injectable()
export class PostStartsService {
  create(createPostStartDto: CreatePostStartDto) {
    return 'This action adds a new postStart';
  }

  findAll() {
    return `This action returns all postStarts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postStart`;
  }

  update(id: number, updatePostStartDto: UpdatePostStartDto) {
    return `This action updates a #${id} postStart`;
  }

  remove(id: number) {
    return `This action removes a #${id} postStart`;
  }
}
