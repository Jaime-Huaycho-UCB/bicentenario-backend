import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";

@Injectable()
export class FolderPostsValidator extends Validator{
    validateIdFolder(idFolder: number){
        if (isNaN(idFolder)){
            throw new HttpException('EL parametro (idFolder) es invalido',this.BAD_REQUEST)
        }
    }
    validateIdPost(idPost: number){
        if (isNaN(idPost)){
            throw new HttpException('El parametro (idPost) es invalido',this.BAD_REQUEST);
        }
    }
    validateFolderPost(data: any){
        if (!data){
            throw new HttpException('No se encontro el testimonio',this.NOT_FOUND)
        }
    }
}