import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";
import { CreatePostStarDto } from "../dto/create-post-star.dto";

@Injectable()
export class PostStarsValidator extends Validator {
    validateIdStar(id: number) {
        if (isNaN(id)) {
            throw new HttpException('El parametro (idStar) es invalido', this.BAD_REQUEST);
        }
    }

    validateIdPost(idPost: number) {
        if (isNaN(idPost)) {
            throw new HttpException('El parametro (idPost) es invalido', this.BAD_REQUEST);
        }
    }
    validateIdUser(idUser: number) {
        if (isNaN(idUser)) {
            throw new HttpException('El parametro (idUser) es invalido', this.BAD_REQUEST);
        }
    }
    validateNumber(number: number){
        if (isNaN(number)){
            throw new HttpException('El parametro (number) es invalido',this.BAD_REQUEST);
        }
        if (!(number>=1 && number<=5)){
            throw new HttpException('El rango de (number) es de 1 a 5',this.BAD_REQUEST);
        }
    }

    validateStar(star){
        if (!star){
            throw new HttpException('La calificacion no se encontro',this.NOT_FOUND);
        }
    }

    validateCreateStar(data: CreatePostStarDto) {
        this.validateIdUser(data.idUser);
        this.validateIdPost(data.idPost);
        this.validateNumber(data.number);
    }
}