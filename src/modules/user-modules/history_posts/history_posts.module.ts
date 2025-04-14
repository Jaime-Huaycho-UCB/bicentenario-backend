import { Module } from '@nestjs/common';
import { HistoryPostsService } from './history_posts.service';
import { HistoryPostsController } from './history_posts.controller';

@Module({
  controllers: [HistoryPostsController],
  providers: [HistoryPostsService],
})
export class HistoryPostsModule {}
