import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostForumsService } from './post-forums.service';
import { CreatePostForumDto } from './dto/create-post-forum.dto';
import { UpdatePostForumDto } from './dto/update-post-forum.dto';

@Controller('post-forums')
export class PostForumsController {
  constructor(private readonly postForumsService: PostForumsService) {}

  @Post()
  create(@Body() createPostForumDto: CreatePostForumDto) {
    return this.postForumsService.create(createPostForumDto);
  }

  @Get()
  findAll() {
    return this.postForumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postForumsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostForumDto: UpdatePostForumDto) {
    return this.postForumsService.update(+id, updatePostForumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postForumsService.remove(+id);
  }
}
