import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestsInvestigatorDto } from './create-requests-investigator.dto';

export class UpdateRequestsInvestigatorDto extends PartialType(CreateRequestsInvestigatorDto) {}
