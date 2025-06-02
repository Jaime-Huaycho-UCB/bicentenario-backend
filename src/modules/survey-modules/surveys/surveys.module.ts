import { Module } from '@nestjs/common';
import { SurveysService } from './services/surveys.service';
import { SurveysController } from './surveys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';
import { SurveysValidator } from './services/surveys.validator';

@Module({
  imports: [
    TypeOrmModule.forFeature([Survey])
  ],
  controllers: [SurveysController],
  providers: [SurveysService,SurveysValidator],
  exports: [SurveysService]
})
export class SurveysModule {}
