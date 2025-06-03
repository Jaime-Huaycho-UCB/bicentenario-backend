import { HttpException } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";

export class SurveysAnsweredValidator extends Validator {
    validateSurveyAnswered(data: any){
        if (!data){
            throw new HttpException('No se encontro la respuesta de la encuesta',this.NOT_FOUND);
        }
    }

    validateIdSurveyAnswered(id: number){
        if (isNaN(id)){
            throw new HttpException('El parametro (idSurveyAnswered) es invalido',this.BAD_REQUEST)
        }
    }
}