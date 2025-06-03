import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionAnswerDto {
    @ApiProperty({description: 'Id de pregunta respondida'})
    idQuestion: number

    @ApiProperty({description: 'Calificaion del 1 a 5',type: Number})
    number: number
}
