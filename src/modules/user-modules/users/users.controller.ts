import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiHeader, ApiResponse, ApiParam } from '@nestjs/swagger';
import { headerAuth } from 'src/modules/auth/auth.util';
import { AuthGuard } from 'src/modules/auth/services/auth.guard';
import { swaggerRes500, DtoResponse, swaggerRes404 } from 'src/common/helpers/classes.dto';
import { responseError } from 'src/common/helpers/out.helper';
import { DtoOutEditUser, DtoInEditUser } from './dto/edit-user';
import { UsersService } from './services/users.service';
import { Response } from 'express';
import { DtoOutGetUsers, GetOneUserDto } from './dto/get-user.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) { }


	// @UseGuards(AuthGuard)
	@Get()
	@ApiOperation({ summary: 'Api para obtener todos los usuarios' })
	@ApiHeader(headerAuth())
	@ApiResponse({
		description: 'Respuesta en caso de obtener exitosamente todos los usuarios',
		status: 200,
		type: DtoOutGetUsers
	})
	@ApiResponse(swaggerRes500())
	async getUsers(@Res() res: Response) {
		try {
			const users = await this.usersService.getUsers();
			return res.status(200).json({
				code: 200,
				users: users
			});
		} catch (error) {
			return responseError(error, res);
		}
	}

	@UseGuards(AuthGuard)
	@Put()
	@ApiOperation({ summary: 'Api para editar informacion de un usuario' })
	@ApiHeader(headerAuth())
	@ApiResponse({
		description: 'Respuesta en caso de edicion exitosa',
		status: 200,
		type: DtoOutEditUser
	})
	@ApiResponse({
		description: 'Respuetesta en caso de no encontrar el usuario',
		status: 404,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes500())
	async editUser(@Body() data: DtoInEditUser, @Res() res: Response) {
		try {
			const editedUser = await this.usersService.editUser(data);
			return res.status(200).json({
				code: 200,
				editedUser: editedUser,
				message: 'El usuario se edito exitosamente'
			});
		} catch (error) {
			return responseError(error, res);
		}
	}

	@UseGuards(AuthGuard)
	@Delete('/:id')
	@ApiOperation({ summary: 'Api para eliminar un usuario de forma logica' })
	@ApiHeader(headerAuth())
	@ApiParam({ name: 'id', required: true, description: 'Id del usuario a eliminar' })
	@ApiResponse({
		description: 'Respuesta en caso de que se elimino exitosamente',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse({
		description: 'Respuetesta en caso de no encontrar el usuario',
		status: 404,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes500())
	async deleteUser(@Param('id') id: string, @Res() res: Response) {
		try {
			const result = await this.usersService.deleteUser(parseInt(id));
			return res.status(200).json({
				code: 200,
				message: 'El usuario se elimino exitosamente'
			});
		} catch (error) {
			return responseError(error, res);
		}
	}

	@Get(':id')
	@ApiOperation({summary: 'Api par obtener a un usurio'})
	@ApiParam({ name: 'id', required: true, description: 'Id del usuario a obtener' })
	@ApiResponse({
		description: 'Salida en caso de obtener exitosamente al usuario',
		status: 200,
		type: GetOneUserDto
	})
	@ApiResponse(swaggerRes404())
	async findOne(@Param('id') id: string,@Res() res: Response){
		try {
			const user = await this.usersService.getAUserById(parseInt(id));
			return res.status(200).json({
				code: 200,
				user: user
			});
		} catch (error) {
			return responseError(error, res);
		}
	}
}
