import { Module } from '@nestjs/common';
import { EventForumMessagesService } from './event-forum_messages.service';
import { EventForumMessagesController } from './event-forum_messages.controller';

@Module({
  controllers: [EventForumMessagesController],
  providers: [EventForumMessagesService],
})
export class EventForumMessagesModule {}
