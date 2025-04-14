import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostComplaintsService } from './post-complaints.service';
import { CreatePostComplaintDto } from './dto/create-post-complaint.dto';
import { UpdatePostComplaintDto } from './dto/update-post-complaint.dto';

@Controller('post-complaints')
export class PostComplaintsController {
  constructor(private readonly postComplaintsService: PostComplaintsService) {}

  @Post()
  create(@Body() createPostComplaintDto: CreatePostComplaintDto) {
    return this.postComplaintsService.create(createPostComplaintDto);
  }

  @Get()
  findAll() {
    return this.postComplaintsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postComplaintsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostComplaintDto: UpdatePostComplaintDto) {
    return this.postComplaintsService.update(+id, updatePostComplaintDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postComplaintsService.remove(+id);
  }
}
