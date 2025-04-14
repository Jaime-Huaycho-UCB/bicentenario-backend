import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostForumMessagesService } from './post-forum-messages.service';
import { CreatePostForumMessageDto } from './dto/create-post-forum-message.dto';
import { UpdatePostForumMessageDto } from './dto/update-post-forum-message.dto';

@Controller('post-forum-messages')
export class PostForumMessagesController {
  constructor(private readonly postForumMessagesService: PostForumMessagesService) {}

  @Post()
  create(@Body() createPostForumMessageDto: CreatePostForumMessageDto) {
    return this.postForumMessagesService.create(createPostForumMessageDto);
  }

  @Get()
  findAll() {
    return this.postForumMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postForumMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostForumMessageDto: UpdatePostForumMessageDto) {
    return this.postForumMessagesService.update(+id, updatePostForumMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postForumMessagesService.remove(+id);
  }
}
