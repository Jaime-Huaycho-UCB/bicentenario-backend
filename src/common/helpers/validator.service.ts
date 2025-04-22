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

    paramNotFound(param: string){
        return `El parametro (${param}) no se encontro`;
    }
    invalidParam(param: string){
        return `El parametro (${param}) es invalido`;
    }
    validateInt(number: string,name: string){
        if (number == null){
            throw new HttpException(this.paramNotFound(name),this.BAD_REQUEST);
        }
        const out = parseInt(number);
        if (isNaN(out)){
            throw new HttpException(this.invalidParam(name),this.BAD_REQUEST);
        }
        return out;
    }

    validateString(string: string,name: string){
        if (string==null){
            throw new HttpException(this.paramNotFound(name),this.BAD_REQUEST);
        }
        if (string.trim().length == 0){
            throw new HttpException(this.invalidParam(name),this.BAD_REQUEST);
        }
    }
}