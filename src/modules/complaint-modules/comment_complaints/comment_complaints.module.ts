import { Module } from '@nestjs/common';
import { CommentComplaintsService } from './comment_complaints.service';
import { CommentComplaintsController } from './comment_complaints.controller';

@Module({
  controllers: [CommentComplaintsController],
  providers: [CommentComplaintsService],
})
export class CommentComplaintsModule {}
