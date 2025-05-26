import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { ResearcherApplicationDto } from "./researcher-application.dto";

export class FindOneResearcherApplication extends DtoCodeResponse{
    @ApiProperty({description: 'Solicitud',type: ResearcherApplicationDto,nullable: false})
    application: ResearcherApplicationDto
}