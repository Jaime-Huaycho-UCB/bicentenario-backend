import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentInteractionDto {
    @ApiProperty({description: 'Id del comentario',type: Number,nullable: false})
    idComment: number

    @ApiProperty({description: 'Id del usuario',type: Number,nullable: false})
    idUser: number
}
