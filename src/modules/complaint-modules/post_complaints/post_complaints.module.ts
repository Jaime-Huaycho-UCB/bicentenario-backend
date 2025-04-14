import { Module } from '@nestjs/common';
import { PostComplaintsService } from './post_complaints.service';
import { PostComplaintsController } from './post_complaints.controller';

@Module({
  controllers: [PostComplaintsController],
  providers: [PostComplaintsService],
})
export class PostComplaintsModule {}
