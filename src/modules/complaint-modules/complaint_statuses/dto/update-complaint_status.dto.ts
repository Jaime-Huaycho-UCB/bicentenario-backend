import { PartialType } from '@nestjs/mapped-types';
import { CreateComplaintStatusDto } from './create-complaint_status.dto';

export class UpdateComplaintStatusDto extends PartialType(CreateComplaintStatusDto) {}
