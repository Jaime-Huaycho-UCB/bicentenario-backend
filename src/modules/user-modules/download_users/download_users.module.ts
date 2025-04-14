import { Module } from '@nestjs/common';
import { DownloadUsersService } from './download_users.service';
import { DownloadUsersController } from './download_users.controller';

@Module({
  controllers: [DownloadUsersController],
  providers: [DownloadUsersService],
})
export class DownloadUsersModule {}
