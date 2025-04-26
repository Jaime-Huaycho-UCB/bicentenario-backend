import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { ComplaintDto } from "./complaint.dto";

export class GetComplaintsDto extends DtoCodeResponse {
    @ApiProperty({description: 'Lista de denuncias',type: [ComplaintDto],nullable: false})
    complaints: ComplaintDto[]
}