import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { FolderPostsService } from './services/folder-posts.service';
import { CreateFolderPostDto } from './dto/create-folder-post.dto';
import { UpdateFolderPostDto } from './dto/update-folder-post.dto';
import { ApiExcludeController, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FolderPost } from './entities/folder-post.entity';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';

@ApiTags('Tsetimonios de colecciones')
@ApiExcludeController(false)
@Controller('folder-posts')
export class FolderPostsController {
	constructor(private readonly folderPostsService: FolderPostsService) { }

	// @UseGuards(AuthGuard)
	@Post()
	@ApiOperation({ summary: 'Api para agregar un testimonio a una coleccion' })
	@ApiResponse({
		description: 'Respuesta en caso de agregar el testimonio a la coleccion exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async create(@Body() data: CreateFolderPostDto, @Res() res: Response) {
		try {
			const folderPost = await this.folderPostsService.create(data);
			return res.status(200).json({
				code: 200,
				message: 'El testimonio se agrego a la coleccion'
			})
		} catch (error) {
			return responseError(error, res);
		}
	}

	// @UseGuards(AuthGuard)
	@Delete(':idFolder/:idPost')
	@ApiOperation({ summary: 'Api para quitar un testimonio de  una coleccion' })
	@ApiResponse({
		description: 'Respuesta en caso de quitar exitosamente el Testimonio de la coleccion',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async remove(@Param('idFolder') idFolder: string,@Param('idPost') idPost: string,@Res() res: Response){
		try {
			const response = await this.folderPostsService.remove(parseInt(idFolder),parseInt(idPost));
			return res.status(200).json({
				code: 200,
				message: 'EL testimonio se quito exitosamente de la coleccion'
			})
		} catch (error) {
			return responseError(error,res)
		}
	}
}
