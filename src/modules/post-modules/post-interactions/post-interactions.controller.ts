import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { PostInteractionsService } from './services/post-interactions.service';
import { CreatePostInteractionDto } from './dto/create-post-interaction.dto';
import { UpdatePostInteractionDto } from './dto/update-post-interaction.dto';
import { ApiExcludeController, ApiExcludeEndpoint, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';

@ApiExcludeController(false)
@ApiTags('Interaciones de testimonio')
@Controller('post-interactions')
export class PostInteractionsController {
	constructor(private readonly postInteractionsService: PostInteractionsService) { }

	// @UseGuards(AuthGuard)
	@Post('/like')
	@ApiOperation({summary: 'Api para dar like a un testimonio'})
	@ApiResponse({
		description: 'Respuesta en caso de dar like exitosament al testimonio',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	async createLike(@Body() data: CreatePostInteractionDto, @Res() res: Response) {
		try {
			const response = await this.postInteractionsService.create(data,1);
			return res.status(200).json({
				code: 200,
				message: 'Se dio like al testimonio'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Post('/dislike')
	@ApiOperation({summary: 'Api para dar dislike a un testimonio'})
	@ApiResponse({
		description: 'Respuesta en caso de dar dislike exitosament al testimonio',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	async createDislike(@Body() data: CreatePostInteractionDto, @Res() res: Response) {
		try {
			const response = await this.postInteractionsService.create(data,0);
			return res.status(200).json({
				code: 200,
				message: 'Se dio like al testimonio'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Delete(':idPost/:idUser')
	@ApiOperation({summary: 'Api para eliminar una interaccion'})
	@ApiResponse({
		description: 'Respuesta en caso de eliminar exitosamente la interaccion',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async remove(@Param('idPost') idPost: string,@Param('idUser') idUser: string,@Res() res: Response) {
		try {
			const interaction = await this.postInteractionsService.remove(parseInt(idPost),parseInt(idUser));
			return res.status(200).json({
				code: 200,
				message: `Se quito la reaccion`
			})
		} catch (error) {
			return responseError(error,res);
		}
	}
}
