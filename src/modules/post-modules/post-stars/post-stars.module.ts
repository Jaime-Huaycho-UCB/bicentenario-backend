import { Module } from '@nestjs/common';
import { PostStarsService } from './services/post-stars.service';
import { PostStarsController } from './post-stars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostStar } from './entities/post-star.entity';
import { PostStarsValidator } from './services/post-stars.validator';
import { PostsModule } from '../posts/posts.module';
import { UsersModule } from 'src/modules/user-modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostStar]),
    PostsModule,
    UsersModule
  ],
  controllers: [PostStarsController],
  providers: [PostStarsService,PostStarsValidator],
  exports: [PostStarsService]
})
export class PostStarsModule {}
