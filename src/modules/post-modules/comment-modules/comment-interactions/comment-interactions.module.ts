import { Module } from '@nestjs/common';
import { CommentInteractionsService } from './comment-interactions.service';
import { CommentInteractionsController } from './comment-interactions.controller';

@Module({
  controllers: [CommentInteractionsController],
  providers: [CommentInteractionsService],
})
export class CommentInteractionsModule {}
