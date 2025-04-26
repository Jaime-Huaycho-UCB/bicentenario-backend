import { ApiProperty } from "@nestjs/swagger";

export class CreateComplaintDto {
    @ApiProperty({description: 'Titulo del la denuncia',type: String,nullable: false})
    title: string

    @ApiProperty({description: 'Reporte escrito de la denuncia',type: String,nullable: false})
    report: string

    @ApiProperty({description: 'Id del objecto de denuncias',type: Number,nullable: false})
    idObject: number

    @ApiProperty({description: 'Id del tipo de objeto',type: Number,nullable: false})
    idObjectType: number
}
