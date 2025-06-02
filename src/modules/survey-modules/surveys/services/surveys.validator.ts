import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";

@Injectable()
export class SurveysValidator extends Validator {
    validateTitle(title: string){
        this.validateString(title,'title');
    }
    validateSurveys(surveys: any[]){
        if (surveys.length === 0){
            throw new HttpException('No hay encuesta disponibles',this.NOT_FOUND)
        }
    }
}