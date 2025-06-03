import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { SurveyAnsweredDto } from "./survey-answered.dto";

export class FindOneSurveysAnsweredDto extends DtoCodeResponse {
    @ApiProperty({description: 'Encuesta respondida',type: SurveyAnsweredDto})
    surveyAnswered: SurveyAnsweredDto
}