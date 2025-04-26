import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res } from '@nestjs/common';
import { ComplaintsService } from './services/complaints.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { GetComplaintsDto } from './dto/get-complaints.dto';
import { DtoResponse, swaggerRes404, swaggerRes500 } from 'src/common/helpers/classes.dto';

@Controller('complaints')
export class ComplaintsController {
	constructor(private readonly complaintsService: ComplaintsService) { }

	@Post()
	@ApiOperation({summary: 'Api para enviar una denuncia de contenido'})
	@ApiResponse({
		description: 'Salida en caso e enviar exitosamente la denunca a revision',
		status: 200,
		type: DtoResponse
	})
	@ApiResponse(swaggerRes500())
	async create(@Body() data: CreateComplaintDto,@Res() res: Response) {
		try {
			const response = await this.complaintsService.create(data);
			return res.status(200).json({
				code: 200,
				messages: response
			});
		} catch (error) {
			return responseError(error, res);
		}
	}

	@Get()
	@ApiOperation({summary: 'Api para obtener todas las denuncias'})
	@ApiResponse({
		description: 'Salida en caso de obtener las denuncias exitosamente',
		status: 200,
		type: GetComplaintsDto
	})
	@ApiResponse(swaggerRes404())
	@ApiQuery({
		name: 'isRevised',
		required: false
	})
	async findAll(
		@Query('isRevised') isRevised: string,
		@Res() res: Response
	) {
		try {
			const complaints = await this.complaintsService.findAll({
				isRevised: isRevised
			});
			return res.status(200).json({
				code: 200,
				complaints: complaints
			});
		} catch (error) {
			return responseError(error, res);
		}
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.complaintsService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateComplaintDto: UpdateComplaintDto) {
		return this.complaintsService.update(+id, updateComplaintDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.complaintsService.remove(+id);
	}
}
