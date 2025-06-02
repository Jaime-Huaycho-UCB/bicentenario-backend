import { Module } from '@nestjs/common';
import { UserDownloadsService } from './services/user-downloads.service';
import { UserDownloadsController } from './user-downloads.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDownload } from './entities/user-download.entity';
import { UsersModule } from '../users/users.module';
import { PostsModule } from 'src/modules/post-modules/posts/posts.module';
import { UserDownloadsValidator } from './services/user-downloads.validator';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDownload]),
    UsersModule,
    PostsModule
  ],
  controllers: [UserDownloadsController],
  providers: [UserDownloadsService,UserDownloadsValidator],
  exports: [UserDownloadsService]
})
export class UserDownloadsModule {}
