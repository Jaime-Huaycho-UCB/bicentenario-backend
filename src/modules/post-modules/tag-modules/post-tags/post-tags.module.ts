import { Module } from '@nestjs/common';
import { PostTagsService } from './post-tags.service';
import { PostTagsController } from './post-tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostTag } from './entities/post-tag.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostTag])
  ],
  controllers: [PostTagsController],
  providers: [PostTagsService],
  exports: [PostTagsService]
})
export class PostTagsModule {}
