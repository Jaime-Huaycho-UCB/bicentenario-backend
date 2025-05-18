import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";
import { CreateFileDto } from "../dto/create-file.dto";

@Injectable()
export class FilesValidator extends Validator{
    validateName(name: string) {
        this.validateString(name,'name');
    }
    validateRoute(route: string) {
        this.validateString(route,'route');
    }
    validateSize(size: number) {
        if (isNaN(size)){
            throw new HttpException('El parametro (size) es invalido',this.BAD_REQUEST);
        }
    }
    validateType(type: string){
        this.validateString(type,'type');
    }
    validateCreateFile(data: CreateFileDto) {
        this.validateName(data.name);
        this.validateRoute(data.route);
        this.validateSize(data.size);
        this.validateType(data.type);
    }
}