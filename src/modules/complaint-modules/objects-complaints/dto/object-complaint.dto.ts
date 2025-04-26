import { ApiProperty } from "@nestjs/swagger"

export class ObjectsComplaintDto {
    @ApiProperty({ description: 'Id del objeto', type: Number, nullable: false })
    id: number

    @ApiProperty({ description: 'Nombre del objeto', type: String, nullable: false })
    name: string
}