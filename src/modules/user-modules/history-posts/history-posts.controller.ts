import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoryPostsService } from './history-posts.service';
import { CreateHistoryPostDto } from './dto/create-history-post.dto';
import { UpdateHistoryPostDto } from './dto/update-history-post.dto';

@Controller('history-posts')
export class HistoryPostsController {
  constructor(private readonly historyPostsService: HistoryPostsService) {}

  @Post()
  create(@Body() createHistoryPostDto: CreateHistoryPostDto) {
    return this.historyPostsService.create(createHistoryPostDto);
  }

  @Get()
  findAll() {
    return this.historyPostsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historyPostsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoryPostDto: UpdateHistoryPostDto) {
    return this.historyPostsService.update(+id, updateHistoryPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historyPostsService.remove(+id);
  }
}
