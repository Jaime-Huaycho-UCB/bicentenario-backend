import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";
import { CreatePostForumDto } from "../dto/create-post-forum.dto";
import { any } from "joi";

@Injectable()
export class PostForumsValidator extends Validator {
    validateIdForum(idForum: number){
        if (isNaN(idForum)){
            throw new HttpException('El parametro (idForum) es invalido',this.BAD_REQUEST)
        }
    }

    validateTitle(title: string){
        this.validateString(title,'title');
    }
    validateDescription(description: string){
        this.validateString(description,'description')
    }

    validateCreatePostForum(data: CreatePostForumDto){
        this.validateTitle(data.title);
        this.validateDescription(data.description);
    }

    validateForum(forum: any){
        if (!(forum)){
            throw new HttpException('No se encontro el foro',this.NOT_FOUND);
        }
    }

    validateForums(forums: any[]){
        if (forums.length === 0){
            throw new HttpException('No hay foros disponibles',this.NOT_FOUND);
        }
    }
}