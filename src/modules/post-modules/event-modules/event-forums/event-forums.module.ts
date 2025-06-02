import { Module } from '@nestjs/common';
import { EventForumsService } from './services/event-forums.service';
import { EventForumsController } from './event-forums.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventForum } from './entities/event-forum.entity';
import { EventForumsValidator } from './services/event-forums.validator';
import { UsersModule } from 'src/modules/user-modules/users/users.module';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventForum]),
    UsersModule,
    EventsModule
  ],
  controllers: [EventForumsController],
  providers: [EventForumsService,EventForumsValidator],
  exports: [EventForumsService]
})
export class EventForumsModule {}
