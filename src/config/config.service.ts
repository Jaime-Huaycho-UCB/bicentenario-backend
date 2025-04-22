import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class MyConfigService {
    constructor(private readonly configService: NestConfigService) { }

    get(key: string) {
        return this.configService.get<string>(key) || null;
    }

    getPort(): number {
        return Number(this.get('PORT')) || 3000;
    }

    getDbConfig() {
        return {
            host: this.get('DB_HOST'),
            port: Number(this.get('DB_PORT')),
            username: this.get('DB_USER'),
            password: this.get('DB_PASSWORD'),
            database: this.get('DB_NAME'),
            logging: Boolean(this.get('LOGS')),
            schema: this.get('DB_SCHEMA') || 'public'
        };
    }

    getJwtConfig() {
        return {
            secret: this.get('JWT_SECRET'),
            expiresIn: this.get('JWT_TIME_EXPIRE'),
        };
    }

    getMailCredentials() {
        return {
            user: this.get('USER_EMAIL'),
            pass: this.get('PASS_AUTH'),
        };
    }

    getGoogleOAuth() {
        return {
            clientId: this.get('GOOGLE_CLIENT_ID'),
            clientSecret: this.get('GOOGLE_CLIENT_SECRET'),
        };
    }

}