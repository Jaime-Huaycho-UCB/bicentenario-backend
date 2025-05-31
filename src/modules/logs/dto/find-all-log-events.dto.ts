import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { LogEventDto } from "./log.dto";

export class FindAllLogEventsDto extends DtoCodeResponse{
    @ApiProperty({description: 'Evento de logs',type: [LogEventDto]})
    events: LogEventDto[]
}