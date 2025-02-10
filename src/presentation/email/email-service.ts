import nodemailer from 'nodemailer';
import { LogBaseRepository } from '../../domain/repositories/log-base.repository';

interface IOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: IAttachment[];
}

interface IAttachment {
    fileName: string;
    path: string;
}

export class EmailService {
    private transporter = nodemailer.createTransport({
        service: process.env.MAILER_SERVICE,
        auth: {
            user: process.env.MAILER_EMAIL,
            pass: process.env.MAILER_SECRET_KEY
        }
    });

    constructor(private logRepository: LogBaseRepository) {
    }

    async sendEmail({ to, subject, htmlBody, attachments = [] }: IOptions) {
        try {
            const sentInformation = await this.transporter.sendMail({ to, subject, html: htmlBody, attachments });
        }
        catch (error) {

        }
    }
}