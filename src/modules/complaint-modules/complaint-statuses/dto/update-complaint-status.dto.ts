import { PartialType } from '@nestjs/mapped-types';
import { CreateComplaintStatusDto } from './create-complaint-status.dto';

export class UpdateComplaintStatusDto extends PartialType(CreateComplaintStatusDto) {}
