import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentComplaintsService } from './comment-complaints.service';
import { CreateCommentComplaintDto } from './dto/create-comment-complaint.dto';
import { UpdateCommentComplaintDto } from './dto/update-comment-complaint.dto';

@Controller('comment-complaints')
export class CommentComplaintsController {
  constructor(private readonly commentComplaintsService: CommentComplaintsService) {}

  @Post()
  create(@Body() createCommentComplaintDto: CreateCommentComplaintDto) {
    return this.commentComplaintsService.create(createCommentComplaintDto);
  }

  @Get()
  findAll() {
    return this.commentComplaintsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentComplaintsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentComplaintDto: UpdateCommentComplaintDto) {
    return this.commentComplaintsService.update(+id, updateCommentComplaintDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentComplaintsService.remove(+id);
  }
}
