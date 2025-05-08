import { ApiProperty } from "@nestjs/swagger"
import { DtoUserName } from "src/modules/user-modules/users/dto/user.dto"

export class CommentDto {
    @ApiProperty({description: 'Id del comentario',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Usuario',type: DtoUserName,nullable: false})
    user: DtoUserName
    
    @ApiProperty({description: 'Contenido del comentario',type: String,nullable: false})
    content: string

    @ApiProperty({description: 'Likes del comentario',type: Number,nullable: false})
    likes: number

    @ApiProperty({description: 'Dilikes del comentario',type: Number,nullable: false})
    dislikes: number

    @ApiProperty({description: 'Fecha de creacino del comentario'})
    createdAt: Date
}