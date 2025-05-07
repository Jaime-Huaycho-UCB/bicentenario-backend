import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SurveysAnsweredService } from './surveys-answered.service';
import { CreateSurveysAnsweredDto } from './dto/create-surveys-answered.dto';
import { UpdateSurveysAnsweredDto } from './dto/update-surveys-answered.dto';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController(true)
@Controller('surveys-answered')
export class SurveysAnsweredController {
  constructor(private readonly surveysAnsweredService: SurveysAnsweredService) {}

  @Post()
  create(@Body() createSurveysAnsweredDto: CreateSurveysAnsweredDto) {
    return this.surveysAnsweredService.create(createSurveysAnsweredDto);
  }

  @Get()
  findAll() {
    return this.surveysAnsweredService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveysAnsweredService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurveysAnsweredDto: UpdateSurveysAnsweredDto) {
    return this.surveysAnsweredService.update(+id, updateSurveysAnsweredDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveysAnsweredService.remove(+id);
  }
}
