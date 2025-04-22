import { ApiProperty } from "@nestjs/swagger";
import { FileDto } from "src/modules/files/dto/file.dto";
import { CityWithDepartamentDto } from "src/modules/location-modules/cities/dto/city.dto";
import { DtoUserName } from "src/modules/user-modules/users/dto/user.dto";
import { TagDto } from "../../tag-modules/tags/dto/tag.dto";

export class PostPublicDto {
    @ApiProperty({description: 'Id del testimonio',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Autor del testimonio',type: DtoUserName,nullable: false})
    user: DtoUserName

    @ApiProperty({description: 'Titulo del testimonio',type: String,nullable: false})
    title: string

    @ApiProperty({description: 'Descripcion del testimonio',type: String,nullable: false})
    description: string

    @ApiProperty({description: 'Estrella de calificaion del testimonio',type: Number,nullable: false})
    stars: number

    @ApiProperty({description: 'Vistas del testimonio',type: Number,nullable: false})
    views: number

    @ApiProperty({description: 'Likes del testimonio',type: Number,nullable: false})
    likes: number

    @ApiProperty({description: 'Dislikes del testimonio',type: Number,nullable: false})
    dislikes: number

    @ApiProperty({description: 'Ciudad del testimonio',type: CityWithDepartamentDto,nullable: false})
    city: CityWithDepartamentDto

    @ApiProperty({description: 'Typo de publicacion',type: Number,nullable: false})
    type: number

    @ApiProperty({description: 'Archivo del testiomonio',type: FileDto,nullable: true})
    file: FileDto | null

    @ApiProperty({description: 'Contenido escrito del testimonio',type: String,nullable: true})
    content: string | null

    @ApiProperty({description: 'Fecha de creacion del testimonio',type: Date,nullable: false})
    createdAt: Date
    
    @ApiProperty({description: 'Etiquetas del testimonio',type: [TagDto],nullable: false})
    tags: TagDto[] | null
}
export class inPostDto {
    @ApiProperty({description: 'Titulo del testimonio',type: String,nullable: false,required: false})
    title: string

    @ApiProperty({description: 'Descripcion del testimonio',type: String,nullable: false,required: false})
    description: string

    @ApiProperty({description: 'Id de la ciudad en la que se sube el testimonio',type: String,nullable: false,required: false})
    idCity: string

    @ApiProperty({description: 'Tipo de contenido del tsetimonio',type: String,nullable: false,enum: ['1','2','3','4'],required: false})
    type: string

    @ApiProperty({description: 'Contenido escrito del testimonio',type: String,nullable: true,required: false})
    content: string

    @ApiProperty({description: 'Id del evento relacionado con el testimonio',type: String,nullable: true,required: false})
    idEvent?: string

    @ApiProperty({description: 'Ids de las etiquetas relacionadas con el testimonio',type: String,nullable: true,example: '1,2,3',required: false})
    tags?: string

    @ApiProperty({description: 'Archivo del testimonio',type: String,format: 'binary',nullable: true,required: false})
    file?: any
}