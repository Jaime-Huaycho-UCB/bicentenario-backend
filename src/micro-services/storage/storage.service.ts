import { HttpException, Injectable } from "@nestjs/common";
import axios from "axios";
import * as FormData from 'form-data';
import { extname } from 'path';
import { randomBytes } from 'crypto';

@Injectable()
export class StorageService {
    getUrlFileSystem() {
        return process.env.FILE_SYSTEM_HOST;
    }

    private generateUniqueFileName(file: Express.Multer.File){
        const uniqueSuffix = Date.now() + '-' + randomBytes(4).toString('hex');
        const extension = extname(file.originalname);
        return `file-${uniqueSuffix}${extension}`;
    }

    async uploadFile(file: Express.Multer.File) {
        const formData = new FormData();

        const uniqueFileName = this.generateUniqueFileName(file);

        formData.append('file', file.buffer, {
            filename: uniqueFileName,
            contentType: file.mimetype
        });

        try {
            const response = await axios.post(`${this.getUrlFileSystem()}/upload`, formData, {
                headers: {
                    ...formData.getHeaders(),
                },
            });

            const fileDetails = {
                name: file.originalname,
                type: file.mimetype,
                size: file.size,
                route: response.data.fileUrl
            };

            return fileDetails;
        } catch (error) {
            throw new HttpException('Hubo un error al subir el archivo', 500);
        }
    }

    async deleteFile(filename: string){
        try {
            const response = await axios.delete(`${this.getUrlFileSystem()}/upload/${filename}`);
            return response;
        } catch (error) {
            throw new HttpException(error.response.data,300);
        }
    }
}
