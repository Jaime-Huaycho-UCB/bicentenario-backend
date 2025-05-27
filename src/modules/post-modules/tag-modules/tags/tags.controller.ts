import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Put } from '@nestjs/common';
import { TagsService } from './services/tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetTagsDto } from './dto/get-tags.dto';
import { swaggerRes404 } from 'src/common/helpers/classes.dto';

@ApiTags('Etiquetas de testimonios')
@Controller('tags')
export class TagsController {
	constructor(private readonly tagsService: TagsService) { }

	@Post()
	async create(@Body() data: CreateTagDto,@Res() res: Response) {
		try {
			const tagSaved = await this.tagsService.create(data);
			return res.status(200).json({
				code: 200,
				tagSaved: tagSaved
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Get()
	@ApiOperation({summary: 'Api para obtener las etiquetas de testimonios'})
	@ApiResponse({
		description: 'Salida en caso de obtener exitosamente todos las etiquetas',
		status: 200,
		type: GetTagsDto
	})
	@ApiResponse(swaggerRes404())
	async findAll(@Res() res: Response) {
		try {
			const tags = await this.tagsService.findAll();
			return res.status(200).json({
				code: 200,
				tags: tags
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Get(':id')
	async findOne(@Param('id') id: string,@Res() res: Response) {
		try {
			const tag = await this.tagsService.findOne(parseInt(id));
			return res.status(200).json({
				code: 200,
				tag: tag
			})
		} catch (error) {
			return responseError(error,res);
		}
	}

	@Put(':id')
	@ApiOperation({summary: 'Api para actualizar una etiqueta'})
	update(@Param('id') id: string, @Body() data: UpdateTagDto) {
		return this.tagsService.update(parseInt(id), data);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.tagsService.remove(+id);
	}
}
