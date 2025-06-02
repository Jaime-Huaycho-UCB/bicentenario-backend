import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SurveyQuestionsService } from './services/survey-questions.service';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController(true)
@Controller('survey-questions')
export class SurveyQuestionsController {
	constructor(private readonly surveyQuestionsService: SurveyQuestionsService) { }
}