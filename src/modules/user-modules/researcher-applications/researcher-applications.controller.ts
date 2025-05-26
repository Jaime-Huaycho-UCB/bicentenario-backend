import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query, UseGuards, Put } from '@nestjs/common';
import { ResearcherApplicationsService } from './services/researcher-applications.service';
import { CreateResearcherApplicationDto } from './dto/create-researcher-application.dto';
import { UpdateResearcherApplicationDto } from './dto/update-researcher-application.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindAllResearcherApplicationsDto } from './dto/find-all-researcher-applications.dto';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { FindOneResearcherApplication } from './dto/find-one-researcher-application.dto';

@ApiTags('Solicitudes para ser investigador')
@Controller('researcher-applications')
export class ResearcherApplicationsController {
	constructor(private readonly researcherApplicationsService: ResearcherApplicationsService) { }

	// @UseGuards(AuthGuard)
	@Post()
	@ApiOperation({summary: 'Api para enviar una solicitud para ser investigador'})
	@ApiResponse({
		description: 'Respuesta en caso de enviar la solicitud exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async create(@Body() data: CreateResearcherApplicationDto,@Res() res: Response) {
		try {
			const applicationSaved = await this.researcherApplicationsService.create(data);
			return res.status(200).json({
				code: 200,
				message: 'Se envio la solicitud exitosamente'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Get()
	@ApiOperation({summary: 'Api para obtener las solicitudes'})
	@ApiQuery({name: 'status',description: '(1) Solicitudes aprobadas, (-1) Solicitudes rechazadas, (0) Solicitudes pendientes'})
	@ApiResponse({
		description: 'Respuesta en caso de obtener las solicitudes exitosamente',
		status: 200,
		type: FindAllResearcherApplicationsDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findAll(
		@Query('status') status: string,
		@Res() res: Response
	) {
		try {
			const applications = await this.researcherApplicationsService.findAll({
				status: parseInt(status)
			});
			return res.status(200).json({
				code: 200,
				applications: applications
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Get(':idApplication')
	@ApiOperation({summary: 'Api para obtener una solicitud'})
	@ApiResponse({
		description: 'Respuesta en caso de obtener la solicitud exitosamente',
		status: 200,
		type: FindOneResearcherApplication
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findOne(@Param('idApplication') idApplication: string,@Res() res: Response) {
		try {
			const application = await this.researcherApplicationsService.findOne(parseInt(idApplication));
			return res.status(200).json({
				code: 200,
				application: application
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Put('/approve/:idApplication')
	@ApiOperation({summary: 'Api para aprobar la solicitud'})
	@ApiResponse({
		description: 'Respuesta en caso de aprobar la solicitud exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async approve(@Param('idApplication') idApplication: string,@Res() res: Response) {
		try {
			const applicationUpdated = await this.researcherApplicationsService.approve(parseInt(idApplication));
			return res.status(200).json({
				code: 200,
				message: 'La solicitud para investigador fue aceptada'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Put('/decline/:idApplication')
	@ApiOperation({summary: 'Api para rechazar la solicitud'})
	@ApiResponse({
		description: 'Respuesta en caso de rechazar la solicitud exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async decline(@Param('idApplication') idApplication: string,@Res() res: Response) {
		try {
			const applicationUpdated = await this.researcherApplicationsService.decline(parseInt(idApplication));
			return res.status(200).json({
				code: 200,
				message: 'La solicitud para investigador fue rechazada'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}
}
