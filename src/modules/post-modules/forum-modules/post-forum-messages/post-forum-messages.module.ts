import { Module } from '@nestjs/common';
import { PostForumMessagesService } from './services/post-forum-messages.service';
import { PostForumMessagesController } from './post-forum-messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostForumMessage } from './entities/post-forum-message.entity';
import { PostForumsModule } from '../post-forums/post-forums.module';
import { UsersModule } from 'src/modules/user-modules/users/users.module';
import { PostForumMessagesValidator } from './services/post-forum-messages.validator';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostForumMessage]),
    PostForumsModule,
    UsersModule
  ],
  controllers: [PostForumMessagesController],
  providers: [PostForumMessagesService,PostForumMessagesValidator],
  exports: [PostForumMessagesService]
})
export class PostForumMessagesModule {}
