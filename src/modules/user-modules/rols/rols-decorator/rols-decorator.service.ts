import { Injectable } from "@nestjs/common";

@Injectable()
export class RolsDecoratorService {
    getId(name: string){
        switch (name) {
            case 'admin':
                return 1;
            case 'curator':
                return 2;
            case 'researcher':
                return 3;
            case 'visitor':
                return 4;
            default:
                throw new Error('Rol no encontrado')
        }
    }
}