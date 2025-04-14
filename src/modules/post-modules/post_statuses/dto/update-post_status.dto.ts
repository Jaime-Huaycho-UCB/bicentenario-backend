import { PartialType } from '@nestjs/mapped-types';
import { CreatePostStatusDto } from './create-post_status.dto';

export class UpdatePostStatusDto extends PartialType(CreatePostStatusDto) {}
