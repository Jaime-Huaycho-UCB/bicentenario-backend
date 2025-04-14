import { Module } from '@nestjs/common';
import { PostForumsService } from './post_forums.service';
import { PostForumsController } from './post_forums.controller';

@Module({
  controllers: [PostForumsController],
  providers: [PostForumsService],
})
export class PostForumsModule {}
