import { HttpException, Injectable } from "@nestjs/common";

import { Validator } from "src/common/helpers/validator.service";
import { DtoInRegisterUser } from "src/modules/auth/DTOs/auth-in.dto";
import { DtoInEditUser } from "../dto/edit-user";

@Injectable()
export class UsersValidator extends Validator{
    validateUsers(users: any[]){
        if (users.length==0){
            throw new HttpException('No hay usuarios disponibles',this.NOT_FOUND);
        }
    }

    validateUser(user: any){
        if (!(user)){
            throw new HttpException('No se encontro al usuario',this.NOT_FOUND);
        }
    }

    validateExistingUser(user: any) {
        if (user){
            throw new HttpException('El usuario ya existe',this.CONFLICT);
        }
    }

    validateId(id: number){
        if (isNaN(id)){
            throw new HttpException('El id ingresado es invalido',this.BAD_REQUEST);
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

    validateAge(age: number){
        if (isNaN(age)){
            throw new HttpException('El paramaetro (age) no se encontro',this.BAD_REQUEST);
        }
    }

    validateInEditUser(data: DtoInEditUser){
        this.validateId(data.id);
        if (data.email!=null){
            if (data.email.length==0){
                throw new HttpException('El correo no puede estar vacio',this.BAD_REQUEST);
            }
        }
        if (data.name!=null){
            if (data.name.length==0){
                throw new HttpException('El nombre no puedes estar vacio',this.BAD_REQUEST);
            }
        }
        if (data.password!=null){
            if (data.password.length==0){
                throw new HttpException('La contrasena no puede estar vacia',this.BAD_REQUEST);
            }
        }
    }

    validateInRegisterUser(data: DtoInRegisterUser){
        this.validateName(data.name);
        this.validateEmail(data.email);
        this.validatePassword(data.password!);
        this.validateAge(data.age);
    }
}