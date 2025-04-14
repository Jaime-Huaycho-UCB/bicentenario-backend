import { Injectable } from '@nestjs/common';
import { CreateUserForlderDto } from './dto/create-user_forlder.dto';
import { UpdateUserForlderDto } from './dto/update-user_forlder.dto';

@Injectable()
export class UserForldersService {
  create(createUserForlderDto: CreateUserForlderDto) {
    return 'This action adds a new userForlder';
  }

  findAll() {
    return `This action returns all userForlders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userForlder`;
  }

  update(id: number, updateUserForlderDto: UpdateUserForlderDto) {
    return `This action updates a #${id} userForlder`;
  }

  remove(id: number) {
    return `This action removes a #${id} userForlder`;
  }
}
