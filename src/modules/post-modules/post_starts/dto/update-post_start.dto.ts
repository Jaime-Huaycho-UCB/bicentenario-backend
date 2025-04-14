import { PartialType } from '@nestjs/mapped-types';
import { CreatePostStartDto } from './create-post_start.dto';

export class UpdatePostStartDto extends PartialType(CreatePostStartDto) {}
