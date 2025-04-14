import { Injectable } from '@nestjs/common';
import { CreateEventForumMessageDto } from './dto/create-event_forum_message.dto';
import { UpdateEventForumMessageDto } from './dto/update-event_forum_message.dto';

@Injectable()
export class EventForumMessagesService {
  create(createEventForumMessageDto: CreateEventForumMessageDto) {
    return 'This action adds a new eventForumMessage';
  }

  findAll() {
    return `This action returns all eventForumMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventForumMessage`;
  }

  update(id: number, updateEventForumMessageDto: UpdateEventForumMessageDto) {
    return `This action updates a #${id} eventForumMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventForumMessage`;
  }
}
