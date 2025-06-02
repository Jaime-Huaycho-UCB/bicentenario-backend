import { HttpException, Injectable } from "@nestjs/common";
import { Validator } from "src/common/helpers/validator.service";

@Injectable()
export class UserDownloadsValidator extends Validator {
    validateDownload(download: any){
        if (!download){
            throw new HttpException('No se encocntro la descarga',this.NOT_FOUND);
        }
    }

    validateDownloads(downloads: any[]){
        if (downloads.length === 0){
            throw new HttpException('No hay descargas disponibles',this.NOT_FOUND)
        }
    }
};