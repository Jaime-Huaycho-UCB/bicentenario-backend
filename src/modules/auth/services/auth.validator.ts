import { HttpException, Injectable } from "@nestjs/common";
import { DtoInLogin } from "../DTOs/auth-in.dto";
import { HashService } from "src/common/helpers/hash.helper";
import { Validator } from "src/common/helpers/validator.service";

@Injectable()
export class AuthValidator extends Validator{
    constructor(private readonly hashService: HashService){
        super();
    }
    async validatePasswordCorrect(password,hash){
        if (!( await this.hashService.compare(password,hash))){
            throw new HttpException('Contrasena incorrecta',this.UNAUTHORIZED);
        }
    }

    validateEmail(email: string){
        if (email==null){
            throw new HttpException(`El parametro (email) no se encontro`,this.BAD_REQUEST);
        }
        if (email.length==0){
            throw new HttpException('El correo ingresado no es valido',this.BAD_REQUEST);
        }
    }

    validatePassword(password: string){
        if (password ==null){
            throw new HttpException(`El parametro (password) no se encontro`,this.BAD_REQUEST);
        }
        if (password.length==0){
            throw new HttpException('La contrasena ingresa es invalida',this.BAD_REQUEST)
        }
    }

    validatePasswordToGoogle(user){
        if (user.password == null){
            throw new HttpException('Inicie sesion con el metodo con el que se registro',409);
        }
    }

    validateIdToken(idToken: string){
        if (idToken === null){
            throw new HttpException('El parametro (idToken) no se encontro',this.BAD_REQUEST);
        }
        if (idToken.length == 0){
            throw new HttpException('El idToken es invalido',this.BAD_REQUEST);
        }
    }
    validatePayload(payload){
        if (payload == null || payload.email == null || payload.name == null){
            throw new HttpException('Token invalido', 401);
        }
    }

    validateInLogin(data: DtoInLogin){
        this.validateEmail(data.email);
        this.validatePassword(data.password);
    }
}