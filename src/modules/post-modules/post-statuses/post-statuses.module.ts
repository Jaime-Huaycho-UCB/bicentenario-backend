import { Module } from '@nestjs/common';
import { PostStatusesService } from './post-statuses.service';
import { PostStatusesController } from './post-statuses.controller';

@Module({
  controllers: [PostStatusesController],
  providers: [PostStatusesService],
})
export class PostStatusesModule {}
