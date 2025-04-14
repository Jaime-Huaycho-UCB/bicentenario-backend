import { Module } from '@nestjs/common';
import { PostForumMessagesService } from './post_forum_messages.service';
import { PostForumMessagesController } from './post_forum_messages.controller';

@Module({
  controllers: [PostForumMessagesController],
  providers: [PostForumMessagesService],
})
export class PostForumMessagesModule {}
