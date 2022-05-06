import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "65f75aa388e485",
    pass: "965342fa500e03"
  }
});

export class NodemailerMailAdapter implements MailAdapter{

  async sendMail({subject,body}: SendMailData) {
     await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Leonardo dos Santos Lopes <leos_lopes@hotmail.com',
    subject,
    html: body 
  });
  }
}