import { Module } from '@nestjs/common';
import { PostForumsService } from './services/post-forums.service';
import { PostForumsController } from './post-forums.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostForum } from './entities/post-forum.entity';
import { PostsModule } from '../../posts/posts.module';
import { UsersModule } from 'src/modules/user-modules/users/users.module';
import { PostForumsValidator } from './services/post-forums.validator';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostForum]),
    PostsModule,
    UsersModule,
  ],
  controllers: [PostForumsController],
  providers: [PostForumsService,PostForumsValidator],
  exports: [PostForumsService]
})
export class PostForumsModule {}
