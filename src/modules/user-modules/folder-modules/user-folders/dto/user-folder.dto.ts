import { ApiProperty } from "@nestjs/swagger";

export class UserFolderDto {
    @ApiProperty({description: 'Id del folder',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Nombre del folder',type: String,nullable: false})
    name: string

    @ApiProperty({description: 'Fecha de creacion',type: Date,nullable: false})
    createdAt: Date
}