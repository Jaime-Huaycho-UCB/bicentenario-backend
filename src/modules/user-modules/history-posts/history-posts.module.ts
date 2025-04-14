import { Module } from '@nestjs/common';
import { HistoryPostsService } from './history-posts.service';
import { HistoryPostsController } from './history-posts.controller';

@Module({
  controllers: [HistoryPostsController],
  providers: [HistoryPostsService],
})
export class HistoryPostsModule {}
