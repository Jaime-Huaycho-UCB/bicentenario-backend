import { ApiProperty } from "@nestjs/swagger";

export class CommentInteractionDto {
    @ApiProperty({description: 'Tipo de interaccion del usuario,(1) like,(2) dislike',type: Number,nullable: false})
    type: number

    @ApiProperty({description: 'Fecha de la interaccion',type: Date,nullable: false})
    createdAt: Date
}