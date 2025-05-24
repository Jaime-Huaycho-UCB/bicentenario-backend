import { ApiProperty } from "@nestjs/swagger";
import { PostPublicDto } from "src/modules/post-modules/posts/dto/post.dto";

export class UserHistoryDto {
    @ApiProperty({description: 'Id de la historia',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Testiomonio de la historia',type: PostPublicDto,nullable: false})
    post: PostPublicDto

    @ApiProperty({description: 'Fecha de visita al testimonio',type: Date,nullable: false})
    createdAt: Date
}