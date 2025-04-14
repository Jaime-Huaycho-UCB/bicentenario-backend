import { Module } from '@nestjs/common';
import { EventForumsService } from './event-forums.service';
import { EventForumsController } from './event-forums.controller';

@Module({
  controllers: [EventForumsController],
  providers: [EventForumsService],
})
export class EventForumsModule {}
