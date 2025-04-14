import { Module } from '@nestjs/common';
import { SurveysAnsweredService } from './surveys-answered.service';
import { SurveysAnsweredController } from './surveys-answered.controller';

@Module({
  controllers: [SurveysAnsweredController],
  providers: [SurveysAnsweredService],
})
export class SurveysAnsweredModule {}
