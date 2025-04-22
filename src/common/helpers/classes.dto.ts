import { ApiProperty } from "@nestjs/swagger"

export const swaggerRes500 = () => {
    return {
        description: 'Respuesta en caso de error en el servidor',
        status: 500,
        type: DtoResponse
    }
}

export const swaggerRes404 = (m=null) => {
    return {
        description: m==null ? `Respuesta en caso de no encontrar el recurso` : `Respuesta en caso de no encontrar ${m}`,
        status: 404,
        type: DtoResponse
    }
}

export const swaggerRes400 = () => {
    return {
        description: 'Respuesta en caso de no ingresar correctamente los parametros requeridos',
        status: 400,
        type: DtoResponse
    }
}

export const swaggerRes401 = () => {
    return {
        description: 'Respuesta en caso de token invalido o token expirado',
        status: 401,
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