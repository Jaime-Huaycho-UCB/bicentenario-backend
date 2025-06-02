import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from '../dto/create-survey.dto';
import { UpdateSurveyDto } from '../dto/update-survey.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from '../entities/survey.entity';
import { Repository } from 'typeorm';
import { SurveysValidator } from './surveys.validator';
import { time } from 'console';

@Injectable()
export class SurveysService {
	constructor(
		@InjectRepository(Survey)
		private readonly surveyRepository: Repository<Survey>,
		private readonly surveysValidator: SurveysValidator
	) { }

	async findAll() {
		const surveys = await this.surveyRepository.find({
			relations: {
				questions: true
			},
			select: {
				id: true,
				title: true,
				questions: {
					id: true,
					content: true
				},
				createdAt: true
			}
		});
		this.surveysValidator.validateSurveys(surveys);
		return surveys;
	}
}
