import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventForumsService } from './event-forums.service';
import { CreateEventForumDto } from './dto/create-event-forum.dto';
import { UpdateEventForumDto } from './dto/update-event-forum.dto';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController(true)
@Controller('event-forums')
export class EventForumsController {
  constructor(private readonly eventForumsService: EventForumsService) {}

  @Post()
  create(@Body() createEventForumDto: CreateEventForumDto) {
    return this.eventForumsService.create(createEventForumDto);
  }

  @Get()
  findAll() {
    return this.eventForumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventForumsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventForumDto: UpdateEventForumDto) {
    return this.eventForumsService.update(+id, updateEventForumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventForumsService.remove(+id);
  }
}
