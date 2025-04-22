import { ApiProperty } from "@nestjs/swagger"
import { inPostDto, PostPublicDto } from "./post.dto"
import { DtoResponse } from "src/common/helpers/classes.dto"

export class CreatePostDto extends inPostDto{
    @ApiProperty({description: 'Id del usuario que suboi el testimonio',type: String,nullable: false})
    idUser: string
}

export class CreatePostOutDto extends DtoResponse {
    @ApiProperty({description: 'Nuevo testimonio creado',type: PostPublicDto,nullable: false})
    newPost: PostPublicDto
}
