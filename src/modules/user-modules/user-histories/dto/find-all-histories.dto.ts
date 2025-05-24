import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { UserHistoryDto } from "./user-history.dto";

export class FindAllUserHistoriesDto extends DtoCodeResponse{
    @ApiProperty({description: 'Historial del usuario',type: [UserHistoryDto],nullable: false})
    histories: UserHistoryDto[]
}