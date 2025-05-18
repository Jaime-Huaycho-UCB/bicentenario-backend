import { ApiProperty } from "@nestjs/swagger";

export class CreatePostStarDto {
    @ApiProperty({description: 'Id del testimonio',type: Number,nullable: false})
    idPost: number

    @ApiProperty({description: 'Id del usuario',type: Number,nullable: false})
    idUser: number

    @ApiProperty({description: 'Numero de estrellas que dio el usuario',type: Number,nullable: false})
    number: number
}
