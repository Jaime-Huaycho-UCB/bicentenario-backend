import { Module } from '@nestjs/common';
import { PostStartsService } from './post-starts.service';
import { PostStartsController } from './post-starts.controller';

@Module({
  controllers: [PostStartsController],
  providers: [PostStartsService],
})
export class PostStartsModule {}
