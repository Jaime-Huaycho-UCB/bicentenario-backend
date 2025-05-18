import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";
import { CreatePostInteractionDto } from "../dto/create-post-interaction.dto";

@Injectable()
export class PostInteractionsValidator extends Validator{
    validateIdInteraction(id: number){
        if (isNaN(id)){
            throw new HttpException('El parametro (idInteraction) es invalido',this.BAD_REQUEST);
        }
    }

    validateIdPost(idPost: number){
        if (isNaN(idPost)){
            throw new HttpException('El parametro (idPost) es invalido',this.BAD_REQUEST);
        }
    }
    validateIdUser(idUser: number){
        if (isNaN(idUser)){
            throw new HttpException('El parametro (idUser) es invalido',this.BAD_REQUEST);
        }
    }

    validateCreateInteraction(data: CreatePostInteractionDto){
        this.validateIdUser(data.idUser);
        this.validateIdPost(data.idPost);
    }

    validateInteraction(interaction: any){
        if (!interaction){
            throw new HttpException('Nose encontro la interaccion',this.NOT_FOUND);
        }
    }
}