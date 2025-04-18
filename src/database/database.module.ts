// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                const dbConfig = config.getDbConfig();
                console.log(dbConfig);
                return {
                    type: 'postgres',
                    host: dbConfig.host ?? undefined,
                    port: dbConfig.port,
                    username: dbConfig.username ?? undefined,
                    password: dbConfig.password ?? undefined,
                    database: dbConfig.database ?? undefined,
                    autoLoadEntities: true,
                    synchronize: false,
                    logging: dbConfig.logging ?? false,
                };
            },
        }),
    ],
})
export class DatabaseModule { }
