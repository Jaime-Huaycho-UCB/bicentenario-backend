import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserForldersService } from './user-forlders.service';
import { CreateUserForlderDto } from './dto/create-user-forlder.dto';
import { UpdateUserForlderDto } from './dto/update-user-forlder.dto';

@Controller('user-forlders')
export class UserForldersController {
  constructor(private readonly userForldersService: UserForldersService) {}

  @Post()
  create(@Body() createUserForlderDto: CreateUserForlderDto) {
    return this.userForldersService.create(createUserForlderDto);
  }

  @Get()
  findAll() {
    return this.userForldersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userForldersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserForlderDto: UpdateUserForlderDto) {
    return this.userForldersService.update(+id, updateUserForlderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userForldersService.remove(+id);
  }
}
