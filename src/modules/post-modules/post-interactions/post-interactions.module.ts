import { Module } from '@nestjs/common';
import { PostInteractionsService } from './post-interactions.service';
import { PostInteractionsController } from './post-interactions.controller';

@Module({
  controllers: [PostInteractionsController],
  providers: [PostInteractionsService],
})
export class PostInteractionsModule {}
