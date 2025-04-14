import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentInteractionsService } from './comment_interactions.service';
import { CreateCommentInteractionDto } from './dto/create-comment_interaction.dto';
import { UpdateCommentInteractionDto } from './dto/update-comment_interaction.dto';

@Controller('comment-interactions')
export class CommentInteractionsController {
  constructor(private readonly commentInteractionsService: CommentInteractionsService) {}

  @Post()
  create(@Body() createCommentInteractionDto: CreateCommentInteractionDto) {
    return this.commentInteractionsService.create(createCommentInteractionDto);
  }

  @Get()
  findAll() {
    return this.commentInteractionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentInteractionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentInteractionDto: UpdateCommentInteractionDto) {
    return this.commentInteractionsService.update(+id, updateCommentInteractionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentInteractionsService.remove(+id);
  }
}
