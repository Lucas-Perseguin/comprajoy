import { sendCustomerEmail, sendInternalEmail } from "./emailsRepository.js";

export default async function sendEmail(req, res) {
  const { recipient, recipientName, internalHtml, customerHtml } = req.body;

  try {
    const emails = await Promise.all([
      sendInternalEmail(internalHtml, recipientName),
      sendCustomerEmail(customerHtml, recipient, recipientName),
    ]);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}
