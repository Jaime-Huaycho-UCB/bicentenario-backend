import { ApiProperty } from "@nestjs/swagger";
import { EventForumDto } from "./event-forum.dto";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";

export class FindAllEventForumsDto extends DtoCodeResponse{
    @ApiProperty({description: 'Foros',type: [EventForumDto]})
    forums: EventForumDto[]
}