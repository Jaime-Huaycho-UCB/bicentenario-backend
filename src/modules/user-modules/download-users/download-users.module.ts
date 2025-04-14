import { Module } from '@nestjs/common';
import { DownloadUsersService } from './download-users.service';
import { DownloadUsersController } from './download-users.controller';

@Module({
  controllers: [DownloadUsersController],
  providers: [DownloadUsersService],
})
export class DownloadUsersModule {}
