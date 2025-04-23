import { ApiProperty } from "@nestjs/swagger";
import { number } from "joi";
// import { DtoRol } from "./rol.dto";

export class DtoUserName {
    @ApiProperty({description: 'Nombre del propietario de la publicacion'})
    name: string
}

export class DtoUser {
    @ApiProperty({description: 'Id del usuario',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Nombre del usuario',type: String,nullable: false})
    name: string

    @ApiProperty({description: 'Correo del usuario',type: String,nullable: false})
    email: string

    @ApiProperty({description: 'Contrasena del usuario',type: String,nullable: false})
    password: string

    @ApiProperty({description: "Edad del usuario",type: number,nullable: false})
    age: number

    // @ApiProperty({description: 'Tipo de usuario',type: DtoRol,nullable: false})
    // rol: DtoRol

    @ApiProperty({description: 'Estado de eliminacion de usuario (0: activo,1: eliminado)',type: Number,nullable: false})
    isDelete: number
}



