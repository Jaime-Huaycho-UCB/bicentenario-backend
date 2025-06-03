import { ApiProperty } from "@nestjs/swagger";
import { CreateQuestionAnswerDto } from "../../question-modules/question-answers/dto/create-question-answer.dto";

export class CreateSurveysAnsweredDto {
    @ApiProperty({description: 'Id del usuario que respondio el cuestionario',type: Number})
    idUser: number

    @ApiProperty({description: 'Id del testimonio',type: Number})
    idPost: number

    @ApiProperty({description: 'Id de la encuesta',type: Number})
    idSurvey: number

    @ApiProperty({description: 'respuestas a las preguntas del cuestionario',type: [CreateQuestionAnswerDto]})
    questionsAnswered: CreateQuestionAnswerDto[]
}
