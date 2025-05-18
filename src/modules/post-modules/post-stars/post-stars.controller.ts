import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { PostStarsService } from './services/post-stars.service';
import { CreatePostStarDto } from './dto/create-post-star.dto';
import { UpdatePostStarDto } from './dto/update-post-star.dto';
import { date } from 'joi';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';

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
}
