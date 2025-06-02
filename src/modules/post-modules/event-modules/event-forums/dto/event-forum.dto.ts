import { ApiProperty } from "@nestjs/swagger"
import { DtoUserName } from "src/modules/user-modules/users/dto/user.dto"

export class EventForumDto {
    @ApiProperty({description: 'Id del foto',type: Number})
    id: number

    @ApiProperty({description: 'Titulo del foro',type: String})
    title: string

    @ApiProperty({description: 'Descripcion del foro',type: String})
    description: string

    @ApiProperty({description: 'Usuario que creo el foro',type: DtoUserName})
    user: DtoUserName

    @ApiProperty({description: 'Fecha de creacion del foro',type: Date})
    createdAt: Date
}