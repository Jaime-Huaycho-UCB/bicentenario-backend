import { Module } from '@nestjs/common';
import { CommentsService } from './services/comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { UsersModule } from 'src/modules/user-modules/users/users.module';
import { PostsModule } from '../../posts/posts.module';
import { CommentsValidator } from './services/comments.validator';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]),
    UsersModule,
    PostsModule
  ],
  controllers: [CommentsController],
  providers: [CommentsService,CommentsValidator],
  exports: [CommentsService]
})
export class CommentsModule {}
