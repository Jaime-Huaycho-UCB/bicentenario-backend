import { Module } from '@nestjs/common';
import { RequestsInvestigatorService } from './requests_investigator.service';
import { RequestsInvestigatorController } from './requests_investigator.controller';

@Module({
  controllers: [RequestsInvestigatorController],
  providers: [RequestsInvestigatorService],
})
export class RequestsInvestigatorModule {}
