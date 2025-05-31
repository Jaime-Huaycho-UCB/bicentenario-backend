import { ApiProperty } from "@nestjs/swagger";

export class CreatePostForumDto {
    @ApiProperty({description: 'Id del Usuario quien crear el foro',type: Number})
    idUser: number

    @ApiProperty({description: 'Id del testimonio',type: Number})
    idPost: number

    @ApiProperty({description: 'Titulo del foro',type: String})
    title: string

    @ApiProperty({description: 'Descripcion del foro',type: String})
    description: string
}
