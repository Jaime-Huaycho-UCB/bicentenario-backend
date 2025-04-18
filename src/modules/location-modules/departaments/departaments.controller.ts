import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { DepartamentsService } from './departaments.service';
import { CreateDepartamentDto } from './dto/create-departament.dto';
import { UpdateDepartamentDto } from './dto/update-departament.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';

@Controller('departaments')
export class DepartamentsController {
	constructor(private readonly departamentsService: DepartamentsService) { }

	@Post()
	create(@Body() createDepartamentDto: CreateDepartamentDto) {
		return this.departamentsService.create(createDepartamentDto);
	}

	@Get()
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
