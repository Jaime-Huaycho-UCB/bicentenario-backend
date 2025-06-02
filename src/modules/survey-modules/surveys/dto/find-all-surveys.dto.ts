import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { SurveyDto } from "./survey.dto";
import { Survey } from "../entities/survey.entity";

export class FindAllSurveysDto extends DtoCodeResponse {
    @ApiProperty({description: 'Encuestas',type: [SurveyDto]})
    surveys: Survey[]
}