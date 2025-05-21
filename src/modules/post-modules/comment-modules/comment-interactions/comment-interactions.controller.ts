import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { CommentInteractionsService } from './services/comment-interactions.service';
import { CreateCommentInteractionDto } from './dto/create-comment-interaction.dto';
import { UpdateCommentInteractionDto } from './dto/update-comment-interaction.dto';
import { ApiExcludeController, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';
import { FindOneCommentInteractionDto } from './dto/find-one-comment-interaction.dto';

@ApiTags('Interacciones de comentarios')
@ApiExcludeController(false)
@Controller('comment-interactions')
export class CommentInteractionsController {
	constructor(private readonly commentInteractionsService: CommentInteractionsService) { }

	// @UseGuards(AuthGuard)
	@Post('/dislike')
	@ApiOperation({summary: 'Api para dar un dislike a un comentario'})
	@ApiResponse({
		description: 'Respuesta en caso de dar dislike exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async createDislike(@Body() data: CreateCommentInteractionDto,@Res() res: Response) {
		try {
			const interactionSaved = await this.commentInteractionsService.create(data,0);
			return res.status(200).json({
				code: 200,
				message: 'Se dio dislike exitosamente'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Post('/like')
	@ApiOperation({summary: 'Api para dar un like a un comentario'})
	@ApiResponse({
		description: 'Respuesta en caso de dar like exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async createLike(@Body() data: CreateCommentInteractionDto,@Res() res: Response) {
		try {
			const interactionSaved = await this.commentInteractionsService.create(data,1);
			return res.status(200).json({
				code: 200,
				message: 'Se dio like exitosamente'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Get(':idComment/:idUser')
	@ApiOperation({summary: 'Api para obtener la interaccion de un usuario a un comentario'})
	@ApiResponse({
		description: 'Respuesta en caso de obtenre exxitosamente la interaccion',
		status: 200,
		type: FindOneCommentInteractionDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findOne(
		@Param('idComment') idComment: string,
		@Param('idUser') idUser: string,
		@Res() res: Response
	) {
		try {
			const interaction = await this.commentInteractionsService.findOne(parseInt(idComment),parseInt(idUser));
			return res.status(200).json({
				code: 200,
				interaction: interaction
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Delete(':idInteraction')
	@ApiOperation({summary: 'Api para eliminar la interaccion'})
	@ApiResponse({
		description: 'Respuesta en caso de eliminar exitosamente la interaccion',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async remove(@Param('idInteraction') idInteraction: string,@Res() res: Response){
		try {
			const interaction = await this.commentInteractionsService.remove(parseInt(idInteraction));
			return res.status(200).json({
				code: 200,
				message: 'Se elimino exitosamente la interaccion'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}
}
