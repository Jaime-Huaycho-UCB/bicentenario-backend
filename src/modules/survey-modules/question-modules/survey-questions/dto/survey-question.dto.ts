import { ApiProperty } from "@nestjs/swagger";

export class SurveyQuestionDto {
    @ApiProperty({description: 'Id del la pregunta',type: Number})
    id: number

    @ApiProperty({description: 'Contenido de la pregunta',type: String})
    content: string
}