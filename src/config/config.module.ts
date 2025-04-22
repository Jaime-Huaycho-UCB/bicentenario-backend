import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { MyConfigService } from './config.service';
import { envValidationSchema } from './env.validation';

@Global()
@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
            validationSchema: envValidationSchema,
        }),
    ],
    providers: [MyConfigService],
    exports: [MyConfigService],
})
export class ConfigModule { }