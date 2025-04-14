import { Module } from '@nestjs/common';
import { FolderPostsService } from './folder-posts.service';
import { FolderPostsController } from './folder-posts.controller';

@Module({
  controllers: [FolderPostsController],
  providers: [FolderPostsService],
})
export class FolderPostsModule {}
