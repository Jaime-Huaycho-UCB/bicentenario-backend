import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { SurveysService } from './services/surveys.service';
import { ApiExcludeController, ApiExcludeEndpoint, ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { FindAllSurveysDto } from './dto/find-all-surveys.dto';
import { swaggerRes404 } from 'src/common/helpers/classes.dto';

@ApiTags('Encuestas para testimonio')
@Controller('surveys')
export class SurveysController {
	constructor(private readonly surveysService: SurveysService) { }

	@Get()
	@ApiOperation({
		summary: 'Api para obtener la encuestas para testimonios',
		description: 'En este caso solo hay una encuesta predeterminada, para las pruebas, por lo cual para el array se debe agarrar solo la prmera encuesta del vector'
	})
	@ApiResponse({
		description: 'Respuesta en caso de obtener las encuestas exitosamente',
		status: 200,
		type: FindAllSurveysDto
	})
	@ApiProperty(swaggerRes404())
	async findAll(@Res() res: Response) {
		try {
			const surveys = await this.surveysService.findAll();
			return res.status(200).json({
				code: 200,
				surveys: surveys
			})
		} catch (error) {
			return responseError(error,res);
		}
	}
}
