import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";
import { CreateCommentInteractionDto } from "../dto/create-comment-interaction.dto";

@Injectable()
export class CommentInteractionsValidator extends Validator {
    validateIdUser(idUser: number){
        if (isNaN(idUser)){
            throw new HttpException('EL parametro (idUser) es invalido',this.BAD_REQUEST);
        }
    }
    validateIdComment(idComment: number){
        if (isNaN(idComment)){
            throw new HttpException('EL parametro (idComment) no es valido',this.BAD_REQUEST);
        }
    }
    validateIdInteraction(idInteraction: number){
        if (isNaN(idInteraction)){
            throw new HttpException('EL parametro (idInteraction) no es valido',this.BAD_REQUEST);
        }
    }
    validateInteraction(interaction: any){
        if (!interaction){
            throw new HttpException('No se encontro la interaccion',this.NOT_FOUND)
        }
    }
    validateCreateCommentInteraction(data: CreateCommentInteractionDto){
        this.validateIdComment(data.idComment);
        this.validateIdUser(data.idUser);
    }
}