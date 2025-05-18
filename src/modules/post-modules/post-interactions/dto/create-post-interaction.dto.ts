import { ApiProperty } from "@nestjs/swagger"
import { number } from "joi"

export class CreatePostInteractionDto {
    @ApiProperty({description: 'Id del testimonio',type: Number,nullable: false})
    idPost: number

    @ApiProperty({description: 'Id del usuario',type: Number,nullable: false})
    idUser: number
}
