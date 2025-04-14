import { Module } from '@nestjs/common';
import { PostForumsService } from './post-forums.service';
import { PostForumsController } from './post-forums.controller';

@Module({
  controllers: [PostForumsController],
  providers: [PostForumsService],
})
export class PostForumsModule {}
