import { Module } from '@nestjs/common';
import { PostStartsService } from './post_starts.service';
import { PostStartsController } from './post_starts.controller';

@Module({
  controllers: [PostStartsController],
  providers: [PostStartsService],
})
export class PostStartsModule {}
