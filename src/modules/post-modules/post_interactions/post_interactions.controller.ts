import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostInteractionsService } from './post_interactions.service';
import { CreatePostInteractionDto } from './dto/create-post_interaction.dto';
import { UpdatePostInteractionDto } from './dto/update-post_interaction.dto';

@Controller('post-interactions')
export class PostInteractionsController {
  constructor(private readonly postInteractionsService: PostInteractionsService) {}

  @Post()
  create(@Body() createPostInteractionDto: CreatePostInteractionDto) {
    return this.postInteractionsService.create(createPostInteractionDto);
  }

  @Get()
  findAll() {
    return this.postInteractionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postInteractionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostInteractionDto: UpdatePostInteractionDto) {
    return this.postInteractionsService.update(+id, updatePostInteractionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postInteractionsService.remove(+id);
  }
}
