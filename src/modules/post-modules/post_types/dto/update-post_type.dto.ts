import { PartialType } from '@nestjs/mapped-types';
import { CreatePostTypeDto } from './create-post_type.dto';

export class UpdatePostTypeDto extends PartialType(CreatePostTypeDto) {}
