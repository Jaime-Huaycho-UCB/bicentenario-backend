import { ApiProperty } from "@nestjs/swagger";
import { number } from "joi";

export class RolDto {
    @ApiProperty({description: 'Id del rol',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Nombre del rol',type: String,nullable: false})
    name: string
}