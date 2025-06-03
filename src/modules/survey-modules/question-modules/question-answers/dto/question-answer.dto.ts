import { ApiProperty } from "@nestjs/swagger";
import { SurveyQuestionDto } from "../../survey-questions/dto/survey-question.dto";

export class QuestionAnswerDto {
    @ApiProperty({description: 'Id de la respuesta a la pregunta',type: Number})
    id: number

    @ApiProperty({description: 'Calificaion del 1 al 5 del usuario con respecto a la pregunta',type: Number})
    number: number

    @ApiProperty({description: 'Pregunta',type: SurveyQuestionDto})
    question: SurveyQuestionDto
}