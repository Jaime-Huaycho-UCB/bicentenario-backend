import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";
import { CreateCommentDto } from "../dto/create-comment.dto";
import { CreateResponseDto } from "../dto/create-response.dto";

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

    validateIdUser(idUser: number){
        if (isNaN(idUser)){
            throw new HttpException('EL parametro (idUser) es invalido',this.BAD_REQUEST)
        }
    }
    validateIdPost(idPost: number){
        if (isNaN(idPost)){
            throw new HttpException('El parametro (idPost) es invalido',this.BAD_REQUEST);
        }
    }
    validateIdComment(idComment: number){
        if (isNaN(idComment)){
            throw new HttpException('El parametro (idComment) es invalido',this.BAD_REQUEST);
        }
    }
    validateContent(content: string){
        this.validateString(content,'content');
    }

    validateCreateComment(data: CreateCommentDto){
        this.validateIdPost(data.idPost);
        this.validateIdUser(data.idUser);
        this.validateContent(data.content);
    }
    validateCreateResponse(data: CreateResponseDto){
        this.validateIdComment(data.idComment);
        this.validateIdUser(data.idUser);
        this.validateContent(data.content);
    }


}