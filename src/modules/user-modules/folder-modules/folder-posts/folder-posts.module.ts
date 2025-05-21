import { Module } from '@nestjs/common';
import { FolderPostsService } from './services/folder-posts.service';
import { FolderPostsController } from './folder-posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FolderPost } from './entities/folder-post.entity';
import { PostsModule } from 'src/modules/post-modules/posts/posts.module';
import { UserFoldersModule } from '../user-folders/user-folders.module';
import { FolderPostsValidator } from './services/folder-posts.validator';

@Module({
  imports: [
    TypeOrmModule.forFeature([FolderPost]),
    PostsModule,
    UserFoldersModule
  ],
  controllers: [FolderPostsController],
  providers: [FolderPostsService,FolderPostsValidator],
})
export class FolderPostsModule {}
