import { Module } from '@nestjs/common';
import { CommentComplaintsService } from './comment-complaints.service';
import { CommentComplaintsController } from './comment-complaints.controller';

@Module({
  controllers: [CommentComplaintsController],
  providers: [CommentComplaintsService],
})
export class CommentComplaintsModule {}
