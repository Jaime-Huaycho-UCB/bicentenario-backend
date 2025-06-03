import { ApiProperty } from "@nestjs/swagger";
import { QuestionAnswerDto } from "../../question-modules/question-answers/dto/question-answer.dto";

export class SurveyAnsweredDto {
    @ApiProperty({description: 'Id de la respuesta',type: Number})
    id: number

    @ApiProperty({description: 'Decha de respuesta',type: Date})
    createdAt: Date

    @ApiProperty({description: 'Respuestas del usuario',type: [QuestionAnswerDto]})
    answers: QuestionAnswerDto[]
}