import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";
import { CreateResearcherApplicationDto } from "../dto/create-researcher-application.dto";

@Injectable()
export class ResearcherApplicationsValidator extends Validator {
    validateJustification(justification: string){
        if (!justification){
            throw new HttpException('El parametro (justification) es invalido',this.BAD_REQUEST);
        }
        if (justification.length<0 || justification.length>800){
            throw new HttpException('La longitud de la justificacion tiene que estar entre 0-800 caracteres',this.BAD_REQUEST);
        }
    }

    validateCreateResearcherApplication(data: CreateResearcherApplicationDto){
        this.validateJustification(data.justification);
    }

    validateResearcherApplication(data: any){
        if (!data){
            throw new HttpException('No se encontro la solicitud o ya fue procesada anteriormente',this.NOT_FOUND);
        }
    }

    validateResearcherApplications(data: any[]){
        if (data.length === 0){
            throw new HttpException('No hay solicitudes disponibles',this.NOT_FOUND);
        }
    }

    validateIdApplication(idApplication: number){
        if (isNaN(idApplication)){
            throw new HttpException('El parametro (idApplication) es invalido',this.BAD_REQUEST);
        }
    }
}