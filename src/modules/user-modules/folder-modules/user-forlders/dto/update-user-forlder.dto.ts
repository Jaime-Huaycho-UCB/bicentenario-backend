import { PartialType } from '@nestjs/mapped-types';
import { CreateUserForlderDto } from './create-user-forlder.dto';

export class UpdateUserForlderDto extends PartialType(CreateUserForlderDto) {}
