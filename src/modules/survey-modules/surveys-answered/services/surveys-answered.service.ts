import { Injectable } from '@nestjs/common';
import { CreateSurveysAnsweredDto } from '../dto/create-surveys-answered.dto';
import { UpdateSurveysAnsweredDto } from '../dto/update-surveys-answered.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SurveysAnswered } from '../entities/surveys-answered.entity';
import { Repository } from 'typeorm';
import { SurveysAnsweredValidator } from './surveys-answered.validator';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';
import { PostsService } from 'src/modules/post-modules/posts/services/posts.service';
import { SurveysService } from '../../surveys/services/surveys.service';
import { QuestionAnswersService } from '../../question-modules/question-answers/services/question-answers.service';

@Injectable()
export class SurveysAnsweredService {
	constructor(
		@InjectRepository(SurveysAnswered)
		private readonly surveysAnsweredRepository: Repository<SurveysAnswered>,
		private readonly surveysAnsweredValidator: SurveysAnsweredValidator,
		private readonly usersService: UsersService,
		private readonly postsService: PostsService,
		private readonly surveysService: SurveysService,
		private readonly questionAnswersService: QuestionAnswersService
	){}

	async create(data: CreateSurveysAnsweredDto) {
		const user = await this.usersService.getAUserById(data.idUser);
		const post = await this.postsService.findOne(data.idPost);
		const survey = await this.surveysService.findOne(data.idSurvey);
		const surveyAnswered = new SurveysAnswered();
		surveyAnswered.user = user!;
		surveyAnswered.post = post!;
		surveyAnswered.survey = survey!;
		const surveyAnsweredSaved = await this.surveysAnsweredRepository.save(surveyAnswered);
		const questionAnswersSaved = await this.questionAnswersService.create(surveyAnsweredSaved.id,data.questionsAnswered);
		return surveyAnsweredSaved;
	}

	findAll() {
		return `This action returns all surveysAnswered`;
	}

	async findOne(idSurveyAnswered: number) {
		this.surveysAnsweredValidator.validateIdSurveyAnswered(idSurveyAnswered);
		const surveysAnswered = await this.surveysAnsweredRepository.findOne({
			where: {
				id: idSurveyAnswered
			},
			relations: {
				answers: {
					question: true
				}
			},
			select: {
				id: true,
				createdAt: true,
				answers: {
					id: true,
					number: true,
					question: {
						id: true,
						content: true
					}
				}
			}
		})
		this.surveysAnsweredValidator.validateSurveyAnswered(surveysAnswered);
		return surveysAnswered;
	}

	update(id: number, updateSurveysAnsweredDto: UpdateSurveysAnsweredDto) {
		return `This action updates a #${id} surveysAnswered`;
	}

	remove(id: number) {
		return `This action removes a #${id} surveysAnswered`;
	}
}
