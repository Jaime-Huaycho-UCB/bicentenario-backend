import { Module } from '@nestjs/common';
import { PostStarsService } from './services/post-stars.service';
import { PostStarsController } from './post-stars.controller';

@Module({
  controllers: [PostStarsController],
  providers: [PostStarsService],
})
export class PostStarsModule {}
