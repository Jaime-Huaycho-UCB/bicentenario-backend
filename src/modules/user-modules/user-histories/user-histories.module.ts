import { forwardRef, Module } from '@nestjs/common';
import { UserHistoriesService } from './services/user-histories.service';
import { UserHistoriesController } from './user-histories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHistory } from './entities/user-history.entity';
import { UserHistoriesValidator } from './services/user-histories.validator';
import { UsersModule } from '../users/users.module';
import { PostsModule } from 'src/modules/post-modules/posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserHistory]),
    UsersModule,
    forwardRef(() => PostsModule),
  ],
  controllers: [UserHistoriesController],
  providers: [UserHistoriesService,UserHistoriesValidator],
  exports: [UserHistoriesService]
})
export class UserHistoriesModule {}
