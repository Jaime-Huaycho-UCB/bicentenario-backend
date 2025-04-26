import { ApiProperty } from "@nestjs/swagger";
import { ComplaintStatusDto } from "../../complaint-statuses/dto/complaint-statuses.dto";
import { ObjectsComplaintDto } from "../../objects-complaints/dto/object-complaint.dto";
import { Timestamp } from "typeorm";
import { number } from "joi";

export class ComplaintDto {
    @ApiProperty({description: 'Id de la denuncia',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Titulo del la denuncia',type: String,nullable: false})
    title: string

    @ApiProperty({description: 'Reporte escrito de la denuncia',type: String,nullable: false})
    report: string

    @ApiProperty({description: 'Id del objeto a denunciar',type: Number,nullable: false})
    object: number

    @ApiProperty({description: 'Objeto de a denunciar',type: ObjectsComplaintDto,nullable: false})
    objectType: ObjectsComplaintDto

    @ApiProperty({description: 'Estado de denuncia',type: ComplaintStatusDto,nullable: false})
    status: ComplaintStatusDto

    @ApiProperty({description: 'Estado de revision',type: Boolean,nullable: false})
    isRevised: boolean

    @ApiProperty({description: 'Fecha de denuncia',type: Date,nullable: false})
    createdAt: Date
}