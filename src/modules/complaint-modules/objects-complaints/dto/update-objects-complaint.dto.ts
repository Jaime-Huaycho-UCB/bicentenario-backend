import { PartialType } from '@nestjs/mapped-types';
import { CreateObjectsComplaintDto } from './create-objects-complaint.dto';

export class UpdateObjectsComplaintDto extends PartialType(CreateObjectsComplaintDto) {}
