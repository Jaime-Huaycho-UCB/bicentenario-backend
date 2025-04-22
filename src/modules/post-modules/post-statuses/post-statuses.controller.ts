import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostStatusesService } from './services/post-statuses.service';
import { CreatePostStatusDto } from './dto/create-post-status.dto';
import { UpdatePostStatusDto } from './dto/update-post-status.dto';

@Controller('post-statuses')
export class PostStatusesController {
  constructor(private readonly postStatusesService: PostStatusesService) {}

  @Post()
  create(@Body() createPostStatusDto: CreatePostStatusDto) {
    return this.postStatusesService.create(createPostStatusDto);
  }

  @Get()
  findAll() {
    return this.postStatusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postStatusesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostStatusDto: UpdatePostStatusDto) {
    return this.postStatusesService.update(+id, updatePostStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postStatusesService.remove(+id);
  }
}
