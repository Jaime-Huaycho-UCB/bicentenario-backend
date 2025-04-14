import { Module } from '@nestjs/common';
import { UserForldersService } from './user_forlders.service';
import { UserForldersController } from './user_forlders.controller';

@Module({
  controllers: [UserForldersController],
  providers: [UserForldersService],
})
export class UserForldersModule {}
