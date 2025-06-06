import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { EventDto } from "./event.dto";

export class GetEventsDto extends DtoCodeResponse {
    @ApiProperty({description: 'Eventos disponibles',type: [EventDto],nullable: false})
    eventos: EventDto[]
}

export class GetOneEventDto extends DtoCodeResponse {
    @ApiProperty({description: 'Evento',type: EventDto,nullable: false})
    event: EventDto
}