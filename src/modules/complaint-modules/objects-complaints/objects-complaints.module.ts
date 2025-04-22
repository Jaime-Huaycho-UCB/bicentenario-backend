import { Module } from '@nestjs/common';
import { ObjectsComplaintsService } from './objects-complaints.service';
import { ObjectsComplaintsController } from './objects-complaints.controller';

@Module({
  controllers: [ObjectsComplaintsController],
  providers: [ObjectsComplaintsService],
})
export class ObjectsComplaintsModule {}
