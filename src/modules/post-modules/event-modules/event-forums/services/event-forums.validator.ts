import { HttpException, Injectable } from "@nestjs/common";
import { CreateEventForumDto } from "../dto/create-event-forum.dto";
import { Validator } from "src/common/helpers/validator.service";

@Injectable()
export class EventForumsValidator extends Validator {
    validateIdForum(idForum: number) {
        if (isNaN(idForum)) {
            throw new HttpException('El parametro (idForum) es invalido', this.BAD_REQUEST)
        }
    }

    validateTitle(title: string) {
        this.validateString(title, 'title');
    }
    validateDescription(description: string) {
        this.validateString(description, 'description')
    }

    validateCreate(data: CreateEventForumDto) {
        this.validateTitle(data.title);
        this.validateDescription(data.description);
    }

    validateForum(forum: any) {
        if (!(forum)) {
            throw new HttpException('No se encontro el foro', this.NOT_FOUND);
        }
    }

    validateForums(forums: any[]) {
        if (forums.length === 0) {
            throw new HttpException('No hay foros disponibles', this.NOT_FOUND);
        }
    }
}