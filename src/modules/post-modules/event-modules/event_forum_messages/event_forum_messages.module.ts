import { Module } from '@nestjs/common';
import { EventForumMessagesService } from './event_forum_messages.service';
import { EventForumMessagesController } from './event_forum_messages.controller';

@Module({
  controllers: [EventForumMessagesController],
  providers: [EventForumMessagesService],
})
export class EventForumMessagesModule {}
