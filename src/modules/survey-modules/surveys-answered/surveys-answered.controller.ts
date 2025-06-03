import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { SurveysAnsweredService } from './services/surveys-answered.service';
import { CreateSurveysAnsweredDto } from './dto/create-surveys-answered.dto';
import { UpdateSurveysAnsweredDto } from './dto/update-surveys-answered.dto';
import { ApiExcludeController, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { DtoResponse, swaggerRes400 } from 'src/common/helpers/classes.dto';
import { FindOneSurveysAnsweredDto } from './dto/find-one-surveys-answered.dto';

@ApiTags('Encuestas respondidas')
@Controller('surveys-answered')
export class SurveysAnsweredController {
	constructor(private readonly surveysAnsweredService: SurveysAnsweredService) { }

	@Post()
	@ApiOperation({summary: 'Api para responder a encuestas'})
	@ApiResponse({
		description: 'Respuesta en caso de responder la encuesta exitosamente',
		status: 200,
		type: DtoResponse
	})
	async create(@Body() data: CreateSurveysAnsweredDto,@Res() res: Response) {
		try {
			const surveyAnswered = await this.surveysAnsweredService.create(data);
			return res.status(200).json({
				code: 200,
				message: 'Se registro la respuesta de la encuesta'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Get(':idSurveyAnswered')
	@ApiOperation({summary: 'Api para obtener una encuesta respondida'})
	@ApiResponse({
		description: 'Respuesta en caso de oibtener la respuesta del usuario exitosamente',
		status: 200,
		type: FindOneSurveysAnsweredDto
	})
	@ApiResponse(swaggerRes400())
	async findOne(@Param('idSurveyAnswered') idSurveyAnswered: string,@Res() res: Response){
		try {
			const surveyAnswered = await this.surveysAnsweredService.findOne(parseInt(idSurveyAnswered));
			return res.status(200).json({
				code: 200,
				surveyAnswered: surveyAnswered
			})
		} catch (error) {
			return responseError(error,res);
		}
	}
}
