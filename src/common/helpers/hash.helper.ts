import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class HashService {
    private saltRounds = 10;

    async hash(password: string) {
        return await bcrypt.hash(password, this.saltRounds);
    }

    async compare(password: string, hashedPassword: string) {
        return await bcrypt.compare(password, hashedPassword);
    }
}
