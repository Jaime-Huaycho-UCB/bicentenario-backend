import { ApiProperty } from "@nestjs/swagger"
import { DtoUserName } from "src/modules/user-modules/users/dto/user.dto"

export class EventForumMessageDto {
    @ApiProperty({description: 'Id del mensaje',type: Number})
    id: number

    @ApiProperty({description: 'Usuario que escribio el mensaje',type: DtoUserName})
    user: DtoUserName

    @ApiProperty({description: 'Contenido del mensaje',type: String})
    content: string

    @ApiProperty({description: 'Fecha de creacion del mensaje',type: Date})
    createdAt: Date
}