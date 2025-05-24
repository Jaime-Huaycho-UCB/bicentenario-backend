import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { UserHistoriesService } from './services/user-histories.service';
import { CreateUserHistoryDto } from './dto/create-user-history.dto';
import { UpdateUserHistoryDto } from './dto/update-user-history.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { ApiExcludeEndpoint, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { FindAllUserHistoriesDto } from './dto/find-all-histories.dto';

@ApiTags('Historial de reproducciones de usuario')
@Controller('user-histories')
export class UserHistoriesController {
	constructor(private readonly userHistoriesService: UserHistoriesService) { }

	@ApiExcludeEndpoint(true)
	@Post()
	async create(@Body() data: CreateUserHistoryDto,@Res() res: Response) {
		try {
			const historySaved = await this.userHistoriesService.create(data);
			return res.status(200).json({
				code: 200,
				message: 'Se guardo el testimonio en el historial del usuario'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Get(':idUser')
	@ApiOperation({summary: 'Api para obtener el historial de un usuario'})
	@ApiResponse({
		description: 'Respuesta en caso de obtener el historial exitosamente',
		status: 200,
		type: FindAllUserHistoriesDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findAll(
		@Param('idUser') idUser: string,
		@Res() res: Response
	) {
		try {
			const histories = await this.userHistoriesService.findAll(parseInt(idUser),{
				post: true
			});
			return res.status(200).json({
				code: 200,
				histories: histories
			});
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Delete(':idHistory')
	@ApiOperation({summary: 'Api para eliminar un testimonio del historial de reproducciones'})
	@ApiResponse({
		description: 'Respuesta en caso de eliminar exitosamente el testimonio',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async remove(@Param('idHistory') idHistory: string,@Res() res: Response) {
		try {
			const histories = await this.userHistoriesService.remove(parseInt(idHistory));
			return res.status(200).json({
				code: 200,
				message: 'El testimonio se borro de tu historial exitosamente'
			});
		} catch (error) {
			return responseError(error,res);
		}
	}
}
