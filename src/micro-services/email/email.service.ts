import { HttpException, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { DtoInSendMail } from './email.dto';

@Injectable()
export class EmailService {
	private transporter;

	constructor() {
		this.transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.USER_EMAIL,
				pass: process.env.PASS_AUTH,
			},
		});
	}

	async sendEmail(data: DtoInSendMail) {
		const mailOptions = {
			from: process.env.USER_EMAIL,
			to: data.destination,
			subject: data.title,
			html: data.html,
			...((data.files === null || (data.files || []).length==(0)) ? {}:{
				attachments: data.files
			})
		};

		try {
			const enviarEmail = await this.transporter.sendMail(mailOptions);
			return enviarEmail;
		} catch (error) {
			if (error.response?.includes('550') || error.code.includes('EENVELOPE')) {
				throw new HttpException('El correo de destino no existe o no es válido', 409);
			} else if (error.code === 'EAUTH') {
				throw new HttpException('Error de autenticación. Verifica las credenciales.', 401);
			} else if (error.code === 'ENOTFOUND' || error.code === 'ECONNECTION') {
				throw new HttpException('No se pudo conectar al servidor de correos.', 503);
			} else {
				throw new HttpException(`Error desconocido`, 500);
			}
		}
	}
}