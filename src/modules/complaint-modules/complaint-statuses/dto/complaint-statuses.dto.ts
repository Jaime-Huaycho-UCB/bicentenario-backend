import { ApiProperty } from "@nestjs/swagger";

export class ComplaintStatusDto {
    @ApiProperty({description: 'Id del estado',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Nombre del estado',type: String,nullable: false})
    name: string

    @ApiProperty({description: 'Descripcion del estado',type: String,nullable: false})
    description: string
}