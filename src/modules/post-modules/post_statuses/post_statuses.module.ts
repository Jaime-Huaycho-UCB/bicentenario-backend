import { Module } from '@nestjs/common';
import { PostStatusesService } from './post_statuses.service';
import { PostStatusesController } from './post_statuses.controller';

@Module({
  controllers: [PostStatusesController],
  providers: [PostStatusesService],
})
export class PostStatusesModule {}
