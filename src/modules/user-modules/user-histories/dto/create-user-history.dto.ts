import { ApiProperty } from "@nestjs/swagger";

export class CreateUserHistoryDto {
    @ApiProperty({description: 'Id del usuario',type: Number,nullable: false})
    idUser: number

    @ApiProperty({description: 'Id del testimonio',type: Number,nullable: false})
    idPost: number
}
