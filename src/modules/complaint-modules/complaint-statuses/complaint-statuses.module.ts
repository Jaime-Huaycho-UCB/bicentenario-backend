import { Module } from '@nestjs/common';
import { ComplaintStatusesService } from './complaint-statuses.service';
import { ComplaintStatusesController } from './complaint-statuses.controller';

@Module({
  controllers: [ComplaintStatusesController],
  providers: [ComplaintStatusesService],
})
export class ComplaintStatusesModule {}
