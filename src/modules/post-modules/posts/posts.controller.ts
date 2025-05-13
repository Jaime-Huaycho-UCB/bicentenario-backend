import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query, Search, UseInterceptors, UploadedFile, Put, UseGuards, UploadedFiles } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { CreatePostDto, CreatePostOutDto } from './dto/create-post.dto';
import { UpdatePostDto, UpdatePostOutDto } from './dto/update-post.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiHeader, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetPostDto } from './dto/get-post.dto';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404, swaggerRes500 } from 'src/common/helpers/classes.dto';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { headerAuth } from 'src/modules/auth/auth.util';

@ApiTags('Testimonios')
@Controller('posts')
export class PostsController {
	constructor(private readonly postsService: PostsService) { }

	// @UseGuards(AuthGuard)
	@Post()
	@ApiOperation({summary: 'Api para crear testimonios'})
	@ApiHeader(headerAuth())
	@UseInterceptors(FileFieldsInterceptor([
		{ name: 'file',maxCount: 1},
		{ name: 'miniature', maxCount: 1}
	]))
	@ApiConsumes('multipart/form-data')
	@ApiResponse({
		description: 'Respuesta en caso de ingresar exitosamente el testimonio',
		status: 201,
		type: CreatePostOutDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	@ApiResponse(swaggerRes500())
	async create(
		@Body() data: CreatePostDto,
		@UploadedFiles() files: {
			file: Express.Multer.File[],
			miniature: Express.Multer.File[]
		},
		@Res() res: Response) {
		try {
            const newPost = await this.postsService.create(data,
				files.file[0],
				files.miniature[0]
			);
            return res.status(201).json({
                code: 201,
                message: 'Se creo exitosamente la publicacion',
                newPost: newPost
            });
        } catch (error) {
            return responseError(error,res);
        }
	}

	// @UseGuards(AuthGuard)
	@Get()
	@ApiOperation({summary: 'Api para obtener testimonios'})
	@ApiHeader(headerAuth())
	@ApiQuery({description: 'Id de la ciudad del testimonio para filtro',name: 'idCity',required: false,type: String,example: '1'})
	@ApiQuery({description: 'Id del estado del testimonio para filtro',name: 'idStatus',required: false,type: String,example: '1'})
	@ApiQuery({description: 'Id del evento relacionado con el testimonio para filtro',name: 'idEvent',required: false,type: String,example: '1'})
	@ApiQuery({description: 'Palabra clave a buscar en el nombre para filtro',name: 'search',required: false,type: String,example: 'hola mundo'})
	@ApiQuery({description: 'Ids de etiquetas relacionadas al testimonio para filtro',name: 'tags',required: false,type: String,example: '1,2,3'})
	@ApiQuery({description: 'Numero de pagina a ver',name: 'page',required: false,type: String,example: '1'})
	@ApiQuery({description: 'Limite de testimonios por pagina',name: 'limit',required: false,type: String,example: '10'})
	@ApiQuery({description: 'Tipo de testimonio',name: 'type',required: false,type: String,example: '1'})
	@ApiQuery({description: 'Id del usuario',name: 'idUser',required: false,type: String,example: '1'})
	@ApiResponse({
		description: 'Respuesta en caso de obtener exitosamente los testimonios',
		status: 200,
		type: GetPostDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	async findAll(
		@Query('idCity') idCity,
		@Query('idStatus') idStatus,
		@Query('idEvent') idEvent,
		@Query('search') search: string,
		@Query('tags') tags,
		@Query('page') page,
		@Query('limit') limit,
		@Query('type') type,
		@Query('idUser') idUser,
		@Res() res: Response
	) {
		try {
			const postsAndData = await this.postsService.findAll({
				idCity: parseInt(idCity),
				idStatus: parseInt(idStatus),
				idEvent: parseInt(idEvent),
				search: (search === undefined) ? null : (search.trim() == '' ? null : search.trim()),
				tags: (tags === undefined) ? null : (search == '' ? null : tags),
				page: parseInt(page),
				limit: parseInt(limit),
				type: parseInt(type),
				idUser: parseInt(idUser)
			});
			return res.status(200).json({
				code: 200,
				...postsAndData
			})
		} catch (error) {
			return responseError(error,res);
		};
	}

	@Get(':id')
	@ApiOperation({summary: 'Api para obtener un solo tsetimonio'})
	findOne(@Param('id') id: string) {
		return this.postsService.findOne(id);
	}

	@UseGuards(AuthGuard)
	@Put(':id')
	@ApiOperation({summary: 'Api para la actualizacion de testimonio'})
	@ApiHeader(headerAuth())
	@ApiConsumes('multipart/form-data')
	@UseInterceptors(FileInterceptor('file'))
	@ApiResponse({
		description: 'Respuesta en caso de actualizar exitosamente',
		status: 200,
		type: UpdatePostOutDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	@ApiResponse(swaggerRes500())
	async update(@Param('id') id: string, @Body() data: UpdatePostDto,@UploadedFile() file: Express.Multer.File,@Res() res: Response) {
		try {
			const updatedPost = await this.postsService.update(id,data,file);
			return res.status(200).json({
				code: 200,
				message: 'Se actualizo exitosamente el testimonio',
				updatedPost: updatedPost
			})
		} catch (error) {
			console.log(error);
			return responseError(error,res);
		}
	}

	@UseGuards(AuthGuard)
	@Delete(':id')
	@ApiOperation({summary: 'Api para eliminar un testimonio'})
	@ApiHeader(headerAuth())
	@ApiResponse({
		description: 'Respuesta en caso de Eliminar exitosamente un destimonio',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async remove(@Param('id') id: string,@Res() res: Response) {
		try {
			const response = await this.postsService.remove(id);
			return res.status(200).json({
				code: 200,
				message: 'Se elimino exitosamente el testimonio'
			});
		} catch (error) {
			return responseError(error,res);
		}
	}
}
