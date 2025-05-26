import { PartialType } from '@nestjs/swagger';
import { CreateResearcherApplicationDto } from './create-researcher-application.dto';

export class UpdateResearcherApplicationDto extends PartialType(CreateResearcherApplicationDto) {
    
}
