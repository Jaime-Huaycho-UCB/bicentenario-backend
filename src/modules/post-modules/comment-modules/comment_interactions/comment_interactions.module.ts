import { Module } from '@nestjs/common';
import { CommentInteractionsService } from './comment_interactions.service';
import { CommentInteractionsController } from './comment_interactions.controller';

@Module({
  controllers: [CommentInteractionsController],
  providers: [CommentInteractionsService],
})
export class CommentInteractionsModule {}
