import { ApiProperty } from "@nestjs/swagger";

export class TagDto {
    @ApiProperty({description: 'Id de la etiqueta',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'NOmbre de la etiqueta',type: String,nullable: false})
    name: string
}