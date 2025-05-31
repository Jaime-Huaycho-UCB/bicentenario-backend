import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";
import { CreateLogDto } from "../dto/create-log.dto";
import { log } from "console";

@Injectable()
export class LogsValidator extends Validator {
    validateDescription(description: string){
        this.validateString(description,'description');
    }

    validateIdEvent(idEvent: number){
        if (isNaN(idEvent)){
            throw new HttpException('El parametro (idEvent) no es valido',this.BAD_REQUEST)
        }
    }

    validateCreate(data: CreateLogDto){
        this.validateDescription(data.description);
        this.validateIdEvent(data.idEvent);
    }

    validateLog(data: any){
        if (!log){
            throw new HttpException('El log no se encontro',this.NOT_FOUND)
        }
    }

    validateLogs(data: any[]){
        if (data.length === 0){
            throw new HttpException('No hay logs disponibles',this.NOT_FOUND);
        }
    }

    validateEvent(data: any){
        if (!data){
            throw new HttpException('El evento no se encontro',this.NOT_FOUND)
        }
    }
}