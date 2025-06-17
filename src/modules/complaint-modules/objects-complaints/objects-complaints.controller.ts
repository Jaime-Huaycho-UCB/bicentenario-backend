import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ObjectsComplaintsService } from './objects-complaints.service';
import { CreateObjectsComplaintDto } from './dto/create-objects-complaint.dto';
import { UpdateObjectsComplaintDto } from './dto/update-objects-complaint.dto';
import { ApiExcludeController, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { responseError } from 'src/common/helpers/out.helper';

@ApiTags('Tipos de cosas a denunciar')
@Controller('objects-complaints')
export class ObjectsComplaintsController {
  constructor(private readonly objectsComplaintsService: ObjectsComplaintsService) {}

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const types = await this.objectsComplaintsService.findAll();
      return res.status(200).json({
        code: 200,
        types: types
      })
    } catch (error) {
      return responseError(error,res);
    }
  }
}
