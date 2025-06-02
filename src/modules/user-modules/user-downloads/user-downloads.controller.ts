import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, Res } from '@nestjs/common';
import { UserDownloadsService } from './services/user-downloads.service';
import { CreateUserDownloadDto } from './dto/create-user-download.dto';
import { UpdateUserDownloadDto } from './dto/update-user-download.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { Response } from 'express';
import { FindAllUserDownloadsDto } from './dto/find-all-user-downloads.dto';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';
import { responseError } from 'src/common/helpers/out.helper';

@ApiTags('Descargas de usuario')
@Controller('user-downloads')
export class UserDownloadsController {
	constructor(private readonly userDownloadsService: UserDownloadsService) { }

	// @UseGuards(AuthGuard)
	@Post()
	@ApiOperation({summary: 'Api para crear un resgistro de descarga'})
	@ApiResponse({
		description: 'Respuesta en caso de guardar el registro exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async create(@Body() data: CreateUserDownloadDto,@Res() res: Response) {
		try {
			const downloadSaved = await this.userDownloadsService.create(data);
			return res.status(200).json({
				code: 200,
				message: 'Se registro al descarga exitosamente'
			})
		} catch (error) {
			return responseError(error,res)
		}
	}

	// @UseGuards(AuthGuard)
	@Get()
	@ApiOperation({ summary: 'Api para obtener el historial de descargas de testimonios' })
	@ApiQuery({ name: 'idUser', required: false})
	@ApiQuery({ name: 'idPost', required: false})
	@ApiQuery({ name: 'createdAt', required: false, enum: ['DESC', 'ASC'], description: 'Para cambiar el orden' })
	@ApiQuery({ name: 'page', required: false })
	@ApiQuery({ name: 'limit', required: false })
	@ApiResponse({
		description: 'Respuesta en caso de obtener las descargas exitosamente',
		status: 200,
		type: FindAllUserDownloadsDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findAll(
		@Query('idUser') idUser: string,
		@Query('idPost') idPost: string,
		@Query('createdAt') createdAt: string,
		@Query('limit') limit: string,
		@Query('page') page: string,
		@Res() res: Response
	) {
		try {
			const response = await this.userDownloadsService.findAll({
				idUser: parseInt(idUser),
				idPost: parseInt(idPost),
				limit: parseInt(limit),
				page: parseInt(page),
				createdAt: createdAt
			})
			return res.status(200).json({
				code: 200,
				...response
			})
		} catch (error) {
			return responseError(error,res);
		}
	}
}