import { ApiProperty } from "@nestjs/swagger";
import { number } from "joi";
import { RolDto } from "../../rols/dto/rol.dto";
// import { DtoRol } from "./rol.dto";

export class DtoUserName {
    @ApiProperty({description: 'Id del usuario',type: Number,nullable: false})
    id: number
    
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

export class OneUserDto {
    @ApiProperty({description: 'Id del usuario',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Nombre del usuario',type: String,nullable: false})
    name: string

    @ApiProperty({description: 'Correo del usuario',type: String,nullable: false})
    email: string

    @ApiProperty({description: 'Contrasena del usuario',type: String,nullable: false})
    password: string

    @ApiProperty({description: "Edad del usuario",type: Number,nullable: false})
    age: number

    @ApiProperty({description: 'Tipo de usuario',type: RolDto,nullable: false})
    rol: RolDto

    @ApiProperty({description: 'Strikes del usuario',type: Number,nullable: false})
    strikes: number

    @ApiProperty({description: 'fecha de ccreacion del usuario',type: Date,nullable: false})
    createdAt: Date
}



