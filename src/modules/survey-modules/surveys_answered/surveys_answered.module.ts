import { Module } from '@nestjs/common';
import { SurveysAnsweredService } from './surveys_answered.service';
import { SurveysAnsweredController } from './surveys_answered.controller';

@Module({
  controllers: [SurveysAnsweredController],
  providers: [SurveysAnsweredService],
})
export class SurveysAnsweredModule {}
