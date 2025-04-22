import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { PostPublicDto } from "./post.dto";

export class GetPostDto extends DtoCodeResponse{
    @ApiProperty({description: 'Testimonios',type: [PostPublicDto],nullable: false})
    posts: PostPublicDto[]
}