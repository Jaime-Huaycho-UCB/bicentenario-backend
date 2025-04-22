import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { DepartamentsService } from './services/departaments.service';
import { CreateDepartamentDto } from './dto/create-departament.dto';
import { UpdateDepartamentDto } from './dto/update-departament.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetDepartamentsDto } from './dto/get-departament.dto';

@Controller('departaments')
export class DepartamentsController {
	constructor(private readonly departamentsService: DepartamentsService) { }

	@Post()
	create(@Body() createDepartamentDto: CreateDepartamentDto) {
		return this.departamentsService.create(createDepartamentDto);
	}

	@Get()
	@ApiOperation({summary: 'Api para la obtencion de deparatamentos con sus regioneso ciudades'})
	@ApiResponse({
		description: 'Salida en caso de obtener exitosamente todos los los departamentos',
		status: 200,
		type: GetDepartamentsDto
	})
	async findAll(@Res() res: Response) {
		try {
			const departaments = await this.departamentsService.findAll();
			return res.status(200).json({
				code: 200,
				departaments: departaments
			});
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.departamentsService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateDepartamentDto: UpdateDepartamentDto) {
		return this.departamentsService.update(+id, updateDepartamentDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.departamentsService.remove(+id);
	}
}
