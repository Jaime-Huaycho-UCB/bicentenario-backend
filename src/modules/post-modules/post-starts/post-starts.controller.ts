import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostStartsService } from './post-starts.service';
import { CreatePostStartDto } from './dto/create-post-start.dto';
import { UpdatePostStartDto } from './dto/update-post-start.dto';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController(true)
@Controller('post-starts')
export class PostStartsController {
  constructor(private readonly postStartsService: PostStartsService) {}

  @Post()
  create(@Body() createPostStartDto: CreatePostStartDto) {
    return this.postStartsService.create(createPostStartDto);
  }

  @Get()
  findAll() {
    return this.postStartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postStartsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostStartDto: UpdatePostStartDto) {
    return this.postStartsService.update(+id, updatePostStartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postStartsService.remove(+id);
  }
}
