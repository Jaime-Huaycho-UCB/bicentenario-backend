import { PartialType } from '@nestjs/mapped-types';
import { CreatePostStartDto } from './create-post-start.dto';

export class UpdatePostStartDto extends PartialType(CreatePostStartDto) {}
