import { Module } from '@nestjs/common';
import { ComplaintsService } from './services/complaints.service';
import { ComplaintsController } from './complaints.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complaint } from './entities/complaint.entity';
import { ComplaintsValidator } from './services/complaints.validator';
import { EmailModule } from 'src/micro-services/email/email.module';
import { ComplaintStatusesModule } from '../complaint-statuses/complaint-statuses.module';
import { PostsModule } from 'src/modules/post-modules/posts/posts.module';
import { CommentsModule } from 'src/modules/post-modules/comment-modules/comments/comments.module';
import { ObjectsComplaintsModule } from '../objects-complaints/objects-complaints.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Complaint]),
    ObjectsComplaintsModule,
    ComplaintStatusesModule,
    PostsModule,
    CommentsModule,
    EmailModule
  ],
  controllers: [ComplaintsController],
  providers: [ComplaintsService,ComplaintsValidator],
})
export class ComplaintsModule {}
