import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FolderPostsService } from './folder_posts.service';
import { CreateFolderPostDto } from './dto/create-folder_post.dto';
import { UpdateFolderPostDto } from './dto/update-folder_post.dto';

@Controller('folder-posts')
export class FolderPostsController {
  constructor(private readonly folderPostsService: FolderPostsService) {}

  @Post()
  create(@Body() createFolderPostDto: CreateFolderPostDto) {
    return this.folderPostsService.create(createFolderPostDto);
  }

  @Get()
  findAll() {
    return this.folderPostsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.folderPostsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFolderPostDto: UpdateFolderPostDto) {
    return this.folderPostsService.update(+id, updateFolderPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.folderPostsService.remove(+id);
  }
}
