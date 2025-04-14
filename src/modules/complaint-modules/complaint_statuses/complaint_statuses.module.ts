import { Module } from '@nestjs/common';
import { ComplaintStatusesService } from './complaint_statuses.service';
import { ComplaintStatusesController } from './complaint_statuses.controller';

@Module({
  controllers: [ComplaintStatusesController],
  providers: [ComplaintStatusesService],
})
export class ComplaintStatusesModule {}
