import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";
import { CreateEventForumMessageDto } from "../dto/create-event-forum-message.dto";

@Injectable()
export class EventForumMessagesValidator extends Validator {
    validateContent(content: string) {
        this.validateString(content, 'content');
    }

    validateCreate(data: CreateEventForumMessageDto) {
        this.validateContent(data.content);
    }

    validateMessages(messages: any[]) {
        if (messages.length == 0) {
            throw new HttpException('No hay mensajes disponibles en este foro', this.NOT_FOUND);
        }
    }

    validateMessage(message: any) {
        if (!message) {
            throw new HttpException('No se encontro el mensaje', this.NOT_FOUND);
        }
    }
}