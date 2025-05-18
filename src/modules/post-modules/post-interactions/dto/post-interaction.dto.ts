import { ApiProperty } from "@nestjs/swagger";

export class PostInteractionDto {
    @ApiProperty({description: 'Tipo de interacion del usuario,(1) like,(0) dislike',type: Number,nullable: false})
    type: number

    @ApiProperty({description: 'Fecha de la interaccion',type: Date,nullable: false})
    createdAt: Date
}