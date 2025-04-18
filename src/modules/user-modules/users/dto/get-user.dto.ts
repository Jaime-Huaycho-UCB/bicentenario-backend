import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { DtoUser } from "./user.dto";

export class DtoOutGetUsers extends DtoCodeResponse{
    @ApiProperty({description: 'Lista de usuarios',type: [DtoUser],nullable: false})
    users: DtoUser[]
}