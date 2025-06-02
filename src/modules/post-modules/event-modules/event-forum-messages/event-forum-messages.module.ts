import { Module } from '@nestjs/common';
import { EventForumMessagesService } from './services/event-forum-messages.service';
import { EventForumMessagesController } from './event-forum-messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventForumMessage } from './entities/event-forum-message.entity';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';
import { EventForumsModule } from '../event-forums/event-forums.module';
import { EventForumMessagesValidator } from './services/event-forum-messages.validator';
import { UsersModule } from 'src/modules/user-modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventForumMessage]),
    UsersModule,
    EventForumsModule
  ],
  controllers: [EventForumMessagesController],
  providers: [EventForumMessagesService,EventForumMessagesValidator],
  exports: [EventForumMessagesService]
})
export class EventForumMessagesModule {}
