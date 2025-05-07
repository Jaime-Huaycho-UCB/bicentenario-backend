import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComplaintStatusesService } from './complaint-statuses.service';
import { CreateComplaintStatusDto } from './dto/create-complaint-status.dto';
import { UpdateComplaintStatusDto } from './dto/update-complaint-status.dto';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController(true)
@Controller('complaint-statuses')
export class ComplaintStatusesController {
  constructor(private readonly complaintStatusesService: ComplaintStatusesService) {}

  @Post()
  create(@Body() createComplaintStatusDto: CreateComplaintStatusDto) {
    return this.complaintStatusesService.create(createComplaintStatusDto);
  }

  @Get()
  findAll() {
    return this.complaintStatusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.complaintStatusesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComplaintStatusDto: UpdateComplaintStatusDto) {
    return this.complaintStatusesService.update(+id, updateComplaintStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complaintStatusesService.remove(+id);
  }
}
