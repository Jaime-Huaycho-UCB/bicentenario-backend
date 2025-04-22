import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class PdfService {
    getPdfServiceUrl(){
        return process.env.PDF_SERVICE_URL;
    }

    async generatePdf(html: string){
        const pdfBuffer = await axios.post(`${this.getPdfServiceUrl()}/generate-pdf`,html,{
            headers: {
                'Content-Type': 'text/plain',
            },
            responseType: 'arraybuffer',
        });
        return pdfBuffer.data;
    }
}