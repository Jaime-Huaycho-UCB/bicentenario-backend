import { ApiProperty } from "@nestjs/swagger";
import { SurveyQuestionDto } from "../../question-modules/survey-questions/dto/survey-question.dto";

export class SurveyDto {
    @ApiProperty({description: 'Id de la encuesta',type: Number})
    id: number

    @ApiProperty({description: 'Titulo de la encuesta',type: String})
    title: string

    @ApiProperty({description: 'Preguntas',type: [SurveyQuestionDto]})
    questions: SurveyQuestionDto[]

    @ApiProperty({description: 'Fecha de creacion',type: Date})
    createdAt: Date
}