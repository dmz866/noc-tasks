import nodemailer from 'nodemailer';

interface IOptions {
    to: string;
    subject: string;
    htmlBody: string;
}

export class EmailService {
    private transporter = nodemailer.createTransport({
        service: process.env.MAILER_SERVICE,
        auth: {
            user: process.env.MAILER_EMAIL,
            pass: process.env.MAILER_SECRET_KEY
        }
    });

    async sendEmail({ to, subject, htmlBody }: IOptions) {
        try {
            const sentInformation = await this.transporter.sendMail({ to, subject, html: htmlBody });
        }
        catch (error) {

        }
    }
}