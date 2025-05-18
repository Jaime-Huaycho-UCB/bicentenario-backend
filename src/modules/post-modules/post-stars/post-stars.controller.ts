import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { PostStarsService } from './services/post-stars.service';
import { CreatePostStarDto } from './dto/create-post-star.dto';
import { UpdatePostStarDto } from './dto/update-post-star.dto';
import { date } from 'joi';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';
import { FindOnePostStarDto } from './dto/find-one-post-star.dto';

@ApiTags('Calificacion de estrella a un testimonio')
@Controller('post-stars')
export class PostStarsController {
	constructor(private readonly postStarsService: PostStarsService) { }

	// @UseGuards(AuthGuard)
	@Post()
	@ApiOperation({summary: 'Api para el registro de calificacion de un testimonio'})
	@ApiResponse({
		description: 'Respuesta en caso de calificar exitosamente un testimonio',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async create(@Body() data: CreatePostStarDto,@Res() res: Response) {
		try {
			const starSaved = await this.postStarsService.create(data);
			return res.status(200).json({
				code: 200,
				message: 'Se califico el testimonio exitosamente'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}
	// @UseGuards(AuthGuard)
	@Get(':idPost/:idUser')
	@ApiOperation({summary: 'Api para obtener las estrella que califico un usurio a un testimonio'})
	@ApiResponse({
		description: 'Respuesta en caso de obtener la calificacion exitosamente',
		status: 200,
		type: FindOnePostStarDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findOne(
		@Param('idPost') idPost: string,
		@Param('idUser') idUser: string,
		@Res() res: Response
	){
		try {
			const star = await this.postStarsService.findOne(parseInt(idPost),parseInt(idUser));
			return res.status(200).json({
				code: 200,
				star: star
			})
		} catch (error) {
			return responseError(error,res);
		}
	}
}
