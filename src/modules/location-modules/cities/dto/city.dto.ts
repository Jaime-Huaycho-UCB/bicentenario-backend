import { ApiProperty } from "@nestjs/swagger";
import { DepartamentDto } from "../../departaments/dto/departament.dto";

export class CityDto {
    @ApiProperty({description: 'Id de la ciudad',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Nombre de la ciudad',type: String,nullable: false})
    name: string

    @ApiProperty({description: 'Latitud de la ubicacion geografica del testimonio',type: Number,nullable: false})
    latitude: number

    @ApiProperty({description: 'Longitud de la ubicacion geografica del testimonio',type: Number,nullable: false})
    longitude: number
}

export class CityWithDepartamentDto extends CityDto{
    @ApiProperty({description: 'Departamento al cual pertenece la ciudad',type: () => DepartamentDto,nullable: false})
    departament: DepartamentDto
}