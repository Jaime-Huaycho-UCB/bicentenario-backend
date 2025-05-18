import { ApiProperty } from "@nestjs/swagger"
import { FileDto } from "src/modules/files/dto/file.dto"

export class CreateEventDto {
    @ApiProperty({description: 'Titulo del evento',type: String,nullable: false})
    title: string

    @ApiProperty({description: 'Descripcion del evento',type: String,nullable: false})
    description: string

    @ApiProperty({description: 'Contenido escrito del evento',type: String,nullable: false})
    content: string

    @ApiProperty({description: 'Id de laciudad en la que sucedio el evento',type: Number,nullable: false})
    idCity: number

    @ApiProperty({description: 'Datos de la imagen del evento',type: FileDto,nullable: true})
    fileData: FileDto
}
