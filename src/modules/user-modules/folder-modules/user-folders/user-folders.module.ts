import { Module } from '@nestjs/common';
import { UserFoldersService } from './services/user-folders.service';
import { UserFoldersController } from './user-folders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFolder } from './entities/user-folder.entity';
import { UserFoldersValidator } from './services/user-folders.validator';
import { UsersModule } from '../../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserFolder]),
    UsersModule
  ],
  controllers: [UserFoldersController],
  providers: [UserFoldersService,UserFoldersValidator],
})
export class UserFoldersModule {}
