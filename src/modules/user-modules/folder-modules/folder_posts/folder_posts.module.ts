import { Module } from '@nestjs/common';
import { FolderPostsService } from './folder_posts.service';
import { FolderPostsController } from './folder_posts.controller';

@Module({
  controllers: [FolderPostsController],
  providers: [FolderPostsService],
})
export class FolderPostsModule {}
