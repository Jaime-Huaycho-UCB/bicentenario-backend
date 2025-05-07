import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestsInvestigatorService } from './requests-investigator.service';
import { CreateRequestsInvestigatorDto } from './dto/create-requests-investigator.dto';
import { UpdateRequestsInvestigatorDto } from './dto/update-requests-investigator.dto';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController(true)
@Controller('requests-investigator')
export class RequestsInvestigatorController {
  constructor(private readonly requestsInvestigatorService: RequestsInvestigatorService) {}

  @Post()
  create(@Body() createRequestsInvestigatorDto: CreateRequestsInvestigatorDto) {
    return this.requestsInvestigatorService.create(createRequestsInvestigatorDto);
  }

  @Get()
  findAll() {
    return this.requestsInvestigatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestsInvestigatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestsInvestigatorDto: UpdateRequestsInvestigatorDto) {
    return this.requestsInvestigatorService.update(+id, updateRequestsInvestigatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestsInvestigatorService.remove(+id);
  }
}
