import { Module } from '@nestjs/common';
import { PostForumMessagesService } from './post-forum-messages.service';
import { PostForumMessagesController } from './post-forum-messages.controller';

@Module({
  controllers: [PostForumMessagesController],
  providers: [PostForumMessagesService],
})
export class PostForumMessagesModule {}
