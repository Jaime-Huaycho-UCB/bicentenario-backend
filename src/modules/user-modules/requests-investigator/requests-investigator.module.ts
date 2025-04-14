import { Module } from '@nestjs/common';
import { RequestsInvestigatorService } from './requests-investigator.service';
import { RequestsInvestigatorController } from './requests-investigator.controller';

@Module({
  controllers: [RequestsInvestigatorController],
  providers: [RequestsInvestigatorService],
})
export class RequestsInvestigatorModule {}
