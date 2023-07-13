import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function sendInternalEmail(internalHtml, recipientName) {
  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY,
  });

  const sentFrom = new Sender("compra@comprajoy.com.br", "Compra Joy");

  const recipients = [
    new Recipient(process.env.INTERNAL_EMAIL, process.env.INTERNAL_EMAIL_NAME),
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(`Nova cotação de ${recipientName}`)
    .setHtml(internalHtml)
    .setText(`Cotação de ${recipientName}`);

  return mailerSend.email.send(emailParams);
}

export function sendCustomerEmail(customerHtml, recipient, recipientName) {
  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY,
  });

  const sentFrom = new Sender("compra@comprajoy.com.br", "Compra Joy");

  const recipients = [new Recipient(recipient, recipientName)];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("Sua nova cotação")
    .setHtml(customerHtml)
    .setText(`Cotação de ${recipientName}`);

  return mailerSend.email.send(emailParams);
}
