import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Rols } from "./rols.decorator";

@Injectable()
export class RolsGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const rols = this.reflector.get(Rols,context.getHandler())
        const auth: any[] = context.switchToHttp().getRequest().rawHeaders;
        // console.log(auth);
        let sal = {};
        for (let i=0;i<auth.length;i++){
            if (i%2 == 0){
                sal[auth[i]] = auth[i+1];
            }
        }
        console.log(sal);
        // throw new Error("Method not implemented.");
        return true;
    }
    
}