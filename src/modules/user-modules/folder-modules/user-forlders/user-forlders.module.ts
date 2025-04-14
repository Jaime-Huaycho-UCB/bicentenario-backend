import { Module } from '@nestjs/common';
import { UserForldersService } from './user-forlders.service';
import { UserForldersController } from './user-forlders.controller';

@Module({
  controllers: [UserForldersController],
  providers: [UserForldersService],
})
export class UserForldersModule {}
