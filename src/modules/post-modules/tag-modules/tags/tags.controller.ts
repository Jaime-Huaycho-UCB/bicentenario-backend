import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { TagsService } from './services/tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetTagsDto } from './dto/get-tags.dto';

@Controller('tags')
export class TagsController {
	constructor(private readonly tagsService: TagsService) { }

	@Post()
	create(@Body() createTagDto: CreateTagDto) {
		return this.tagsService.create(createTagDto);
	}

	@Get()
	@ApiOperation({summary: 'Apipara obtener las etiquetas de testimonios'})
	@ApiResponse({
		description: 'Salida en caso de obtener exitosamente todos las etiquetas',
		status: 200,
		type: GetTagsDto
	})
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
	findOne(@Param('id') id: string) {
		return this.tagsService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
		return this.tagsService.update(+id, updateTagDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.tagsService.remove(+id);
	}
}
