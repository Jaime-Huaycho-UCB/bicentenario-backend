import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";

@Injectable()
export class ComplaintsValidator extends Validator{
    validateId(idComplaint: number){
        if (isNaN(idComplaint)){
            throw new HttpException('EL parametro (idComplaint) es invalido',this.BAD_REQUEST)
        }
    }
}