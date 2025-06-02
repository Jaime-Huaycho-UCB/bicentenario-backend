import { ApiProperty } from "@nestjs/swagger"

export class CreateEventForumMessageDto {
    @ApiProperty({ description: 'Id del Usuario quien crear el foro', type: Number })
    idUser: number

    @ApiProperty({ description: 'Id del foro', type: Number })
    idForum: number

    @ApiProperty({ description: 'Contenido de mensaje', type: String })
    content: string
}
