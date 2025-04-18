import { ApiProperty } from "@nestjs/swagger"

export const swaggerRes500 = () => {
    return {
        description: 'Respuesta en caso de error en el servidor',
        status: 500,
        type: DtoResponse
    }
}

export class DtoCodeResponse {
    @ApiProperty({description: 'Codigo de respuesta',type: Number,nullable: false})
    code: number
}   
export class DtoResponse extends DtoCodeResponse{
    @ApiProperty({description: 'Mensaje de salida',type: String,nullable: false})
    message: string
}