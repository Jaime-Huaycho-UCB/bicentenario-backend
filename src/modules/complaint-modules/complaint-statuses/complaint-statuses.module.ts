import { Module } from '@nestjs/common';
import { ComplaintStatusesService } from './complaint-statuses.service';
import { ComplaintStatusesController } from './complaint-statuses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplaintStatus } from './entities/complaint-status.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ComplaintStatus])
  ],
  controllers: [ComplaintStatusesController],
  providers: [ComplaintStatusesService],
  exports: [ComplaintStatusesService]
})
export class ComplaintStatusesModule {}
