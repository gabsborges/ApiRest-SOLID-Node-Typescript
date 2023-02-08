import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'

export class MailtrapMailProvider implements IMailProvider {

    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                  user: "eb503a03c0fe66",
                  pass: "b7c3394fcd31f2"
                }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body,
        })
    }
}