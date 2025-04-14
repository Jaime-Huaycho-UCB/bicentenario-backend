import { Module } from '@nestjs/common';
import { PostTagsService } from './post_tags.service';
import { PostTagsController } from './post_tags.controller';

@Module({
  controllers: [PostTagsController],
  providers: [PostTagsService],
})
export class PostTagsModule {}
