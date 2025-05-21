import { ApiProperty } from "@nestjs/swagger"

export class CreateFolderPostDto {
    @ApiProperty({description: 'Id de la coleccion',type: Number,nullable: false})
    idFolder: number

    @ApiProperty({description: 'Id del testimonio',type: Number,nullable: false})
    idPost: number
}
