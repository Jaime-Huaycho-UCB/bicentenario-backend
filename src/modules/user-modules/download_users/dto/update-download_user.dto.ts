import { PartialType } from '@nestjs/mapped-types';
import { CreateDownloadUserDto } from './create-download_user.dto';

export class UpdateDownloadUserDto extends PartialType(CreateDownloadUserDto) {}
