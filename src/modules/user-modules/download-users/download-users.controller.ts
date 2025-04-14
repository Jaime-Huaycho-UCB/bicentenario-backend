import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DownloadUsersService } from './download-users.service';
import { CreateDownloadUserDto } from './dto/create-download-user.dto';
import { UpdateDownloadUserDto } from './dto/update-download-user.dto';

@Controller('download-users')
export class DownloadUsersController {
  constructor(private readonly downloadUsersService: DownloadUsersService) {}

  @Post()
  create(@Body() createDownloadUserDto: CreateDownloadUserDto) {
    return this.downloadUsersService.create(createDownloadUserDto);
  }

  @Get()
  findAll() {
    return this.downloadUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.downloadUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDownloadUserDto: UpdateDownloadUserDto) {
    return this.downloadUsersService.update(+id, updateDownloadUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.downloadUsersService.remove(+id);
  }
}
