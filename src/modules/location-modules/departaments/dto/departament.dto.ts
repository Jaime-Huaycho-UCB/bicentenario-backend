import { ApiProperty } from "@nestjs/swagger";
import { CityDto } from "../../cities/dto/city.dto";

export class DepartamentDto {
    @ApiProperty({description: 'Id del departamento',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Nombre del departamento',type: String,nullable: false})
    name: string
}

export class DepartamentWithCitiesDto extends DepartamentDto{
    @ApiProperty({description: 'Lista de ciudades o regiones que perteneces al departamento',type: () => [CityDto],nullable: false})
    cities: CityDto[]
}