import { Injectable } from '@nestjs/common';
import { CreateSurveyQuestionDto } from '../dto/create-survey-question.dto';
import { UpdateSurveyQuestionDto } from '../dto/update-survey-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SurveyQuestion } from '../entities/survey-question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SurveyQuestionsService {
	constructor(
		@InjectRepository(SurveyQuestion)
		private readonly surveyQuestionRepository: Repository<SurveyQuestion>
	){}
}
