import { PartialType } from '@nestjs/swagger';
import { CreateUserDownloadDto } from './create-user-download.dto';

export class UpdateUserDownloadDto extends PartialType(CreateUserDownloadDto) {}
