import { HttpException } from "@nestjs/common";

export class Validator {
    constructor(){}
    NOT_FOUND = 404;
    CONFLICT = 409;
    UNAUTHORIZED = 401;
    BAD_REQUEST = 400;

    validateName(name: string){
        if (name == null || name.length==0){
            throw new HttpException('El parametro (name) no se encontro',this.BAD_REQUEST)
        }
        if (name == null || name.length==0){
            throw new HttpException('El nombre ingresado es invalido',this.BAD_REQUEST)
        }
    }
}