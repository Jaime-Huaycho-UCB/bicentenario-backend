import { Module } from '@nestjs/common';
import { SurveyQuestionsService } from './services/survey-questions.service';
import { SurveyQuestionsController } from './survey-questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyQuestion } from './entities/survey-question.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SurveyQuestion])
  ],
  controllers: [SurveyQuestionsController],
  providers: [SurveyQuestionsService],
  exports: [SurveyQuestionsService]
})
export class SurveyQuestionsModule {}
