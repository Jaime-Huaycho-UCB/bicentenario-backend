import { Injectable } from '@nestjs/common';
import { CreateQuestionAnswerDto } from '../dto/create-question-answer.dto';
import { UpdateQuestionAnswerDto } from '../dto/update-question-answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionAnswer } from '../entities/question-answer.entity';
import { Repository } from 'typeorm';
import { number } from 'joi';

@Injectable()
export class QuestionAnswersService {
	constructor(
		@InjectRepository(QuestionAnswer)
		private readonly questionAnswerRepository: Repository<QuestionAnswer>
	){}

	async create(idSurveyAnswered: number, data: CreateQuestionAnswerDto[]) {
		const objectSave = await this.toSave(idSurveyAnswered, data)
		console.log(objectSave);
		const questionAnswers = await this.questionAnswerRepository.save(objectSave);
		return questionAnswers;
	}

	async toSave(idSurveyAnswered: number,data: CreateQuestionAnswerDto[]){
		let out: any[] = [];
		data.map((answer) => {
			out.push({
				surveyAnswered: {
					id: idSurveyAnswered
				},
				question: {
					id: answer.idQuestion
				},
				number: answer.number
			})
		})
		return out;
	}
}
