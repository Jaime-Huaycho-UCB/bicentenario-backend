import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDownloadDto {
    @ApiProperty({description: 'Id del usuario',type: Number})
    idUser: number

    @ApiProperty({description: 'Id del testimonio',type: Number})
    idPost: number
}
