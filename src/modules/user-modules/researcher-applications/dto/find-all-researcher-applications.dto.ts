import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { ResearcherApplicationDto } from "./researcher-application.dto";

export class FindAllResearcherApplicationsDto extends DtoCodeResponse {
    @ApiProperty({description: 'Solicitudes para aplicar a investigador',type: [ResearcherApplicationDto],nullable: false})
    applications: ResearcherApplicationDto[]
}