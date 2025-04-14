import { Module } from '@nestjs/common';
import { PostInteractionsService } from './post_interactions.service';
import { PostInteractionsController } from './post_interactions.controller';

@Module({
  controllers: [PostInteractionsController],
  providers: [PostInteractionsService],
})
export class PostInteractionsModule {}
