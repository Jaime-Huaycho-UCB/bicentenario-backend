import { Module } from '@nestjs/common';
import { CommentInteractionsService } from './services/comment-interactions.service';
import { CommentInteractionsController } from './comment-interactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentInteraction } from './entities/comment-interaction.entity';
import { CommentsModule } from '../comments/comments.module';
import { UsersModule } from 'src/modules/user-modules/users/users.module';
import { CommentInteractionsValidator } from './services/comment-interaction.validator';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentInteraction]),
    CommentsModule,
    UsersModule
  ],
  controllers: [CommentInteractionsController],
  providers: [CommentInteractionsService,CommentInteractionsValidator],
  exports: [CommentInteractionsService]
})
export class CommentInteractionsModule {}
