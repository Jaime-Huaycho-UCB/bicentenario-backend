import { ApiProperty } from "@nestjs/swagger";

export class CreateResponseDto {

    @ApiProperty({description: 'Id del comentario a responder'})
    idComment: number

    @ApiProperty({description: 'Id del usuario',type: Number,nullable: false})
    idUser: number

    @ApiProperty({description: 'Conteindo de la respuesta',type: String,nullable: false})
    content: string
}