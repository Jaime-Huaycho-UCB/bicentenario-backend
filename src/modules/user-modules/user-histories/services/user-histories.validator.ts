import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";

@Injectable()
export class UserHistoriesValidator extends Validator {
    validateIdUser(idUser: number){
        if (isNaN(idUser)){
            throw new HttpException('EL parametro (idUser) es invalido',this.BAD_REQUEST)
        }
    }

    validateHistories(data: any[]){
        if (data.length === 0){
            throw new HttpException('El historial se encuentra vacio',this.NOT_FOUND);
        }
    }

    validateIdHistory(idHistory: number){
        if (isNaN(idHistory)){
            throw new HttpException('El parametro (idHistory) es invalido',this.BAD_REQUEST);
        }
    }

    validateHistory(data: any){
        if (!data){
            throw new HttpException('No se encontro la historia',this.BAD_REQUEST);
        }
    }
}