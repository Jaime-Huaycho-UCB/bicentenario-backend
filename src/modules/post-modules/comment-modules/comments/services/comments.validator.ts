import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";

@Injectable()
export class CommentsValidator extends Validator{
    validateComments(data: any[]){
        if (data.length==0){
            throw new HttpException('No hay comentarios disponibles',this.NOT_FOUND)
        }
    }

    validateComment(data: any){
        if (!data){
            throw new HttpException('No se encontro el comentario',this.NOT_FOUND)
        }
    }
}