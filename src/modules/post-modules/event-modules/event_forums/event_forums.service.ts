import { Injectable } from '@nestjs/common';
import { CreateEventForumDto } from './dto/create-event_forum.dto';
import { UpdateEventForumDto } from './dto/update-event_forum.dto';

@Injectable()
export class EventForumsService {
  create(createEventForumDto: CreateEventForumDto) {
    return 'This action adds a new eventForum';
  }

  findAll() {
    return `This action returns all eventForums`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventForum`;
  }

  update(id: number, updateEventForumDto: UpdateEventForumDto) {
    return `This action updates a #${id} eventForum`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventForum`;
  }
}
