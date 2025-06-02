import { ApiProperty } from "@nestjs/swagger";
import { DtoUserName } from "../../users/dto/user.dto";
import { PostPublicDto } from "src/modules/post-modules/posts/dto/post.dto";

export class UserDownloadDto {
    @ApiProperty({description: 'Usuario que descargo el testimonio',type: DtoUserName})
    user: DtoUserName

    @ApiProperty({description: 'Testimonio que descargo',type: PostPublicDto})
    post: PostPublicDto

    @ApiProperty({description: 'Fecha de descarga',type: Date})
    createdAt: Date
}