import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";
import { CreateEventDto } from "../dto/create-event.dto";

@Injectable()
export class EventsValidator extends Validator{
    validateId(id: number){
        if (isNaN(id)){
            throw new HttpException('El (id) es invalido',this.BAD_REQUEST);
        }
    }
    validateTitle(title: string){
        this.validateString(title,'title');
    }
    validateDescription(description: string){
        this.validateString(description,'description');
    }
    validateContent(content: string){
        this.validateString(content,'content');
    }
    validateIdCity(idCity: number){
        if (isNaN(idCity)){
            throw new HttpException('El (idCity) es invalido',this.BAD_REQUEST);
        }
    }

    validateEvent(data: any){
        if (!data){
            throw new HttpException('No se encontro el evento',this.NOT_FOUND);
        }
    }
    validateEvents(data: any[]){
        if (data.length === 0){
            throw new HttpException('No se hay eventos disponibles',this.NOT_FOUND);
        }
    }

    validateCreateEvent(data: CreateEventDto){
        this.validateTitle(data.title);
        this.validateDescription(data.description);
        this.validateContent(data.content);
        this.validateIdCity(data.idCity);
    }
}