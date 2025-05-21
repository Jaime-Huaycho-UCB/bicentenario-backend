import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, Put } from '@nestjs/common';
import { UserFoldersService } from './services/user-folders.service';
import { CreateUserFolderDto, CreateUserFolderOutDto } from './dto/create-user-folder.dto';
import { UpdateUserFolderDto, UpdateUserFolderOutDto } from './dto/update-user-folder.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { DtoResponse, swaggerRes400, swaggerRes401, swaggerRes404 } from 'src/common/helpers/classes.dto';
import { FindAllUserFoldersDto } from './dto/find-all-user-folders.dto';
import { FindOneUserFolderDto } from './dto/find-one-user-folder.dto';

@ApiTags('Colecciones de usuario')
@Controller('user-folders')
export class UserFoldersController {
	constructor(private readonly userFoldersService: UserFoldersService) { }

	// @UseGuards(AuthGuard)
	@Post()
	@ApiOperation({summary: 'Api para crear una coleccion'})
	@ApiResponse({
		description: 'Respuesta en caso de crear exitosamente la coleccion',
		status: 200,
		type: CreateUserFolderOutDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async create(@Body() data: CreateUserFolderDto,@Res() res: Response) {
		try {
			const folderSaved = await this.userFoldersService.create(data);
			return res.status(200).json({
				code: 200,
				message: 'La coleccion se creo exitosamente',
				folderSaved: folderSaved
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Get(':idUser')
	@ApiOperation({summary: 'Api para obtener las colecciones de un usuario'})
	@ApiResponse({
		description: 'Respuesta en caso de obtener exitosamente las colecciones del usuario',
		status: 200,
		type: FindAllUserFoldersDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findAll(@Param('idUser') idUser: string,@Res() res: Response) {
		try {
			const folders = await this.userFoldersService.findAll(parseInt(idUser));
			return res.status(200).json({
				code: 200,
				folders: folders
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Get('/one/:idFolder')
	@ApiOperation({summary: 'Api para obtener una coleccion con sus testimonios'})
	@ApiResponse({
		description: 'Respuesta en caso de obtener la coleccion exitosamente',
		status: 200,
		type: FindOneUserFolderDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async findOne(@Param('idFolder') idFolder: string,@Res() res: Response){
		try {
			const folder = await this.userFoldersService.findOne(parseInt(idFolder),{posts: true});
			return res.status(200).json({
				code: 200,
				folder: folder
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Put(':idFolder')
	@ApiOperation({summary: 'Api para actualizar una coleccion'})
	@ApiResponse({
		description: 'Respuesta en caso de actualizar la coleccion exitosamente',
		status: 200,
		type: UpdateUserFolderOutDto
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async update(@Param('idFolder') idFolder: string, @Body() data: UpdateUserFolderDto,@Res() res: Response) {
		try {
			const folderUpdated = await this.userFoldersService.update(parseInt(idFolder),data);
			return res.status(200).json({
				code: 200,
				message: 'La coleccion se actualizo exitosamente',
				folderUpdated: folderUpdated
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	// @UseGuards(AuthGuard)
	@Delete(':idFolder')
	@ApiOperation({summary: 'Api para eliminar una coleccion'})
	@ApiResponse({
		description: 'Respuesta en caso de eliminar extosamente la coleccion',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes400())
	@ApiResponse(swaggerRes401())
	@ApiResponse(swaggerRes404())
	async remove(@Param('idFolder') idFolder: string,@Res() res: Response) {
		try {
			await this.userFoldersService.remove(parseInt(idFolder));
			return res.status(200).json({
				code: 200,
				message: 'La coleccion se elimino exitosamente'
			})
		} catch (error) {
			return responseError(error,res);
		}
	}
}
