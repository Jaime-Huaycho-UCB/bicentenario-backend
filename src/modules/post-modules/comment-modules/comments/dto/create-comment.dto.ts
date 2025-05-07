import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDto {
    @ApiProperty({description: 'Id la publicaion a comentar',type: Number,nullable: false})
    idPost: number

    @ApiProperty({description: 'Id del usurio que comenta',type: Number,nullable: false})
    idUser: number

    @ApiProperty({description: 'Contenido escrito del comentario',type: String,nullable: false})
    content: string
}
