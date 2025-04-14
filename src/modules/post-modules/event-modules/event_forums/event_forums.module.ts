import { Module } from '@nestjs/common';
import { EventForumsService } from './event_forums.service';
import { EventForumsController } from './event_forums.controller';

@Module({
  controllers: [EventForumsController],
  providers: [EventForumsService],
})
export class EventForumsModule {}
