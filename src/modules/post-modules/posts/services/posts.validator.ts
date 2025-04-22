import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";
import { CreatePostDto } from "../dto/create-post.dto";

@Injectable()
export class PostsValidator extends Validator{
    validatePosts(posts: any[]){
        if (posts === null || posts.length == 0){
            throw new HttpException('No se encontraron testimonios',this.NOT_FOUND);
        }
    }

    validateIdPost(id: string){
        this.validateString(id,'id');

        const idPost = this.validateInt(id,'id');
        return idPost;
    }
    validatePost(post: any){
        if (!(post)){
            throw new HttpException('No se encontro el testimonio',404);
        }
    }

    validateTitle(title: string){
        this.validateString(title,'title');
    }

    validateIdUser(idUser: string){
        return this.validateInt(idUser,'idUser');
    }

    validateDescription(description: string){
        this.validateString(description,'description');
    }

    validateIdCity(idCity: string){
        return this.validateInt(idCity,'idCity');
    }

    async validateTags(tags: string){
        let out: number[] = [];
        try {
            tags.split(',').map((tag) => {
                if (isNaN(parseInt(tag))){
                    throw new Error();
                }
                out.push(parseInt(tag));
            });
        } catch (error) {
            throw new HttpException(this.invalidParam('tags'),this.BAD_REQUEST);
        }
        return out;
    }
    validateType(type: string){
        return this.validateInt(type,'type');
    }

    validateCreatePost(data: CreatePostDto){
        this.validateString(data.title,'title');
        this.validateString(data.description,'description');
    }
}