import { Module } from '@nestjs/common';
import { PostComplaintsService } from './post-complaints.service';
import { PostComplaintsController } from './post-complaints.controller';

@Module({
  controllers: [PostComplaintsController],
  providers: [PostComplaintsService],
})
export class PostComplaintsModule {}
