import { Injectable } from '@nestjs/common';
import { CreateDownloadUserDto } from './dto/create-download-user.dto';
import { UpdateDownloadUserDto } from './dto/update-download-user.dto';

@Injectable()
export class DownloadUsersService {
  create(createDownloadUserDto: CreateDownloadUserDto) {
    return 'This action adds a new downloadUser';
  }

  findAll() {
    return `This action returns all downloadUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} downloadUser`;
  }

  update(id: number, updateDownloadUserDto: UpdateDownloadUserDto) {
    return `This action updates a #${id} downloadUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} downloadUser`;
  }
}
