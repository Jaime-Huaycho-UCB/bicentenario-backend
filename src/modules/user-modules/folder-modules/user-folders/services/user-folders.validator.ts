import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";

@Injectable()
export class UserFoldersValidator extends Validator {
    validateIdFolder(idFolder: number){
        if (isNaN(idFolder)){
            throw new HttpException('El parametro (idFolder) es invalido',this.BAD_REQUEST);
        }
    }
    validateName(name: string){
        this.validateString(name,'name');
    }
    validateFolders(folders: any[]){
        if (folders.length === 0){
            throw new HttpException('No hay colecciones disponibles',this.NOT_FOUND);
        }
    }   
    validateFolder(folder: any){
        if (!folder){
            throw new HttpException('No se encontro la coleccion',this.NOT_FOUND)
        }
    }
}