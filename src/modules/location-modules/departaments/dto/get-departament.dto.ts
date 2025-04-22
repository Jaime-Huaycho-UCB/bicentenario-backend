import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { DepartamentWithCitiesDto } from "./departament.dto";
import { ApiProperty } from "@nestjs/swagger";

export class GetDepartamentsDto extends DtoCodeResponse {
    @ApiProperty({description: 'Departamentos',type: [DepartamentWithCitiesDto],nullable: false})
    departaments: DepartamentWithCitiesDto[]
}