import { ApiProperty } from "@nestjs/swagger";
import { PostPublicDto } from "src/modules/post-modules/posts/dto/post.dto";

export class UserFolderDto {
    @ApiProperty({description: 'Id del folder',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Nombre del folder',type: String,nullable: false})
    name: string

    @ApiProperty({description: 'Fecha de creacion',type: Date,nullable: false})
    createdAt: Date
}

export class UserFolderWithPostsDto extends UserFolderDto {
    @ApiProperty({description: 'Testimonios de la coleccion',type: [PostPublicDto],nullable: false})
    posts: PostPublicDto[]
}