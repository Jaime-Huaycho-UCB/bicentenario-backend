import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { PostForumDto } from "./post-forum.dto";

export class FindAllPostForums extends DtoCodeResponse{
    @ApiProperty({description: 'Foros',type: [PostForumDto]})
    forums: PostForumDto[]
}