import { Module } from '@nestjs/common';
import { ObjectsComplaintsService } from './objects-complaints.service';
import { ObjectsComplaintsController } from './objects-complaints.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectsComplaint } from './entities/objects-complaint.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ObjectsComplaint])
  ],
  controllers: [ObjectsComplaintsController],
  providers: [ObjectsComplaintsService],
  exports: [ObjectsComplaintsService]
})
export class ObjectsComplaintsModule {}
