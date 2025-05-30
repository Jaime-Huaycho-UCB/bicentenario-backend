import { Global, Module } from "@nestjs/common";
import { RolsGuard } from "./rols.guard";
import { RolsDecoratorService } from "./rols-decorator.service";

@Global()
@Module({
    imports: [],
    providers: [RolsGuard,RolsDecoratorService],
    exports: [RolsGuard,RolsDecoratorService]
})
export class RolsGuardModule {}