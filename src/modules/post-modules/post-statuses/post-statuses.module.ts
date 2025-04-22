import { Module } from '@nestjs/common';
import { PostStatusesService } from './services/post-statuses.service';
import { PostStatusesController } from './post-statuses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostStatus } from './entities/post-status.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostStatus])
  ],
  controllers: [PostStatusesController],
  providers: [PostStatusesService],
  exports: [PostStatusesService]
})
export class PostStatusesModule {}
