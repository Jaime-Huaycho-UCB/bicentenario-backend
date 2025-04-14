import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventForumMessagesService } from './event-forum_messages.service';
import { CreateEventForumMessageDto } from './dto/create-event-forum_message.dto';
import { UpdateEventForumMessageDto } from './dto/update-event-forum_message.dto';

@Controller('event-forum-messages')
export class EventForumMessagesController {
  constructor(private readonly eventForumMessagesService: EventForumMessagesService) {}

  @Post()
  create(@Body() createEventForumMessageDto: CreateEventForumMessageDto) {
    return this.eventForumMessagesService.create(createEventForumMessageDto);
  }

  @Get()
  findAll() {
    return this.eventForumMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventForumMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventForumMessageDto: UpdateEventForumMessageDto) {
    return this.eventForumMessagesService.update(+id, updateEventForumMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventForumMessagesService.remove(+id);
  }
}
