import { PartialType } from '@nestjs/mapped-types';
import { CreatePostComplaintDto } from './create-post_complaint.dto';

export class UpdatePostComplaintDto extends PartialType(CreatePostComplaintDto) {}
