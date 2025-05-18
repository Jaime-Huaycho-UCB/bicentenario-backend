import { forwardRef, Module } from '@nestjs/common';
import { PostInteractionsService } from './services/post-interactions.service';
import { PostInteractionsController } from './post-interactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostInteraction } from './entities/post-interaction.entity';
import { UsersModule } from 'src/modules/user-modules/users/users.module';
import { PostsModule } from '../posts/posts.module';
import { PostInteractionsValidator } from './services/post-interactions.validator';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostInteraction]),
    UsersModule,
    forwardRef(() => PostsModule)
  ],
  controllers: [PostInteractionsController],
  providers: [PostInteractionsService,PostInteractionsValidator],
  exports: [PostInteractionsService]
})
export class PostInteractionsModule {}
