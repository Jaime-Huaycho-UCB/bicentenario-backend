import { PartialType } from '@nestjs/mapped-types';
import { CreatePostStatusDto } from './create-post-status.dto';

export class UpdatePostStatusDto extends PartialType(CreatePostStatusDto) {}
