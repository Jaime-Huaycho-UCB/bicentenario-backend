import { ApiProperty } from "@nestjs/swagger";
import { Timestamp } from "typeorm";

export class FileDto {
    @ApiProperty({description: 'Id del archivo',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Nombre del archivo',type: String,nullable: false})
    name: string

    @ApiProperty({description: 'Ruta del archico sin host ni puerto',type: String,nullable: false})
    route: string

    @ApiProperty({description: 'Tipo de archivo',type: String,nullable: false})
    type: string

    @ApiProperty({description: 'Peso del archivo',type: Number,nullable: false})
    size: number

    @ApiProperty({description: 'fecha de registro',type: Timestamp,nullable: false})
    createdAt: Date
}