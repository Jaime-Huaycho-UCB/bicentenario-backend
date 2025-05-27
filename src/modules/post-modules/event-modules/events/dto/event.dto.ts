import { ApiProperty } from "@nestjs/swagger";
import { FileDto } from "src/modules/files/dto/file.dto";
import { CityWithDepartamentDto } from "src/modules/location-modules/cities/dto/city.dto";

export class EventDto {
    @ApiProperty({description: 'Id del evento',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Tutilo del evento',type: String,nullable: false})
    title: string

    @ApiProperty({description: 'Descripcion del evento',type: String,nullable: false})
    description: string

    @ApiProperty({description: 'Contenido escrito del evento',type: String,nullable: false})
    content: string

    @ApiProperty({description: 'Datos de la imagen del evento',type: FileDto,nullable: true})
    filea: FileDto

    @ApiProperty({description: 'Ciudad del evento',type: CityWithDepartamentDto,nullable: false})
    city: CityWithDepartamentDto

    @ApiProperty({description: 'Fecha de creacion del evento',type: Date,nullable: false})
    createdAt: Date
}