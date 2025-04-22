import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectsComplaintsService } from './objects-complaints.service';
import { CreateObjectsComplaintDto } from './dto/create-objects-complaint.dto';
import { UpdateObjectsComplaintDto } from './dto/update-objects-complaint.dto';

@Controller('objects-complaints')
export class ObjectsComplaintsController {
  constructor(private readonly objectsComplaintsService: ObjectsComplaintsService) {}

  @Post()
  create(@Body() createObjectsComplaintDto: CreateObjectsComplaintDto) {
    return this.objectsComplaintsService.create(createObjectsComplaintDto);
  }

  @Get()
  findAll() {
    return this.objectsComplaintsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectsComplaintsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjectsComplaintDto: UpdateObjectsComplaintDto) {
    return this.objectsComplaintsService.update(+id, updateObjectsComplaintDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectsComplaintsService.remove(+id);
  }
}
