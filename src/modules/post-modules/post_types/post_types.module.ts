import { Module } from '@nestjs/common';
import { PostTypesService } from './post_types.service';
import { PostTypesController } from './post_types.controller';

@Module({
  controllers: [PostTypesController],
  providers: [PostTypesService],
})
export class PostTypesModule {}
