import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, Query, Put } from '@nestjs/common';
import { PostForumsService } from './services/post-forums.service';
import { CreatePostForumDto } from './dto/create-post-forum.dto';
import { UpdatePostForumDto } from './dto/update-post-forum.dto';
import { ApiExcludeController, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { FindAllPostForums } from './dto/find-all-post-forums.dto';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';

@ApiTags('Foros de testimonio')
@Controller('post-forums')
export class PostForumsController {
	constructor(private readonly postForumsService: PostForumsService) { }

	// @UseGuards(AuthGuard)
	@Post()
	@ApiOperation({summary: 'Api para crear un foro para un testimonio'})
	@ApiResponse({
		description: 'Respuesta en caso de crear un foto exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async create(@Body() data: CreatePostForumDto,@Res() res: Response) {
		try {
			const forums = await this.postForumsService.create(data);
			return res.status(200).json({
				code: 200,
				message: 'Se creo el foro exitosamente'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Get()
	@ApiOperation({summary: 'Api para obtener los foros'})
	@ApiQuery({name: 'idPost',description: 'Filtrar por testimonio',required: false})
	@ApiQuery({name: 'idUser',description: 'Filtrar por usuario, util para obtener los foros creados por un usuario',required: false})
	@ApiQuery({name: 'search',description: 'Para buscar por titulo',required: false})
	@ApiQuery({name: 'page',description: 'Pagina',required: false})
	@ApiQuery({name: 'limit',description: 'Lite de foros de retorno',required: false})
	@ApiQuery({name: 'createdAt',description: 'Devolver por orden',required: false,enum: ['DESC','ASC']})
	@ApiResponse({
		description: 'Respuesta en caso de obtener los fotos exitosamente',
		status: 200,
		type: FindAllPostForums
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findAllByPost(
		@Query('idPost') idPost: string,
		@Query('idUser') idUser: string,
		@Query('page') page: string,
		@Query('limit') limit: string,
		@Query('search') search: string,
		@Query('createdAt') createdAt: string,
		@Res() res: Response
	) {
		try {
			const response = await this.postForumsService.findAll({
				idPost: parseInt(idPost),
				idUser: parseInt(idUser),
				search: search,
				page: parseInt(page),
				limit: parseInt(limit),
				createdAt: createdAt
			});
			return res.status(200).json({
				code: 200,
				...response
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Delete(':idForum')
	@ApiOperation({summary: 'Api para deliminar un foro para un testimonio'})
	@ApiResponse({
		description: 'Respuesta en caso de eliminar un foto exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async remove(@Param('idForum') idForum: string,@Res() res: Response) {
		try {
			const forumUpdated = await this.postForumsService.remove(parseInt(idForum));
			return res.status(200).json({
				code: 200,
				message: 'Se elimino el foro exitosamente'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Put(':idForum')
	@ApiOperation({summary: 'Api para actualizar un foro para un testimonio'})
	@ApiResponse({
		description: 'Respuesta en caso de actualizar un foto exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async update(@Param('idForum') idForum: string,@Body() data: UpdatePostForumDto,@Res() res: Response) {
		try {
			const forumsUpdated = await this.postForumsService.update(parseInt(idForum),data);
			return res.status(200).json({
				code: 200,
				message: 'Se actualizo el foro exitosamente'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}
}
