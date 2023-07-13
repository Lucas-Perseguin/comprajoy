import { render } from "@react-email/render";
import api from "./api";
import InternalEmail from "../Components/Email/InternalEmail";
import CustomerEmail from "../Components/Email/CustomerEmail";

export async function sendForm(values, userData, extra, extraGames) {
  const promises = await Promise.all([
    render(
      <InternalEmail
        values={values}
        userData={userData}
        extra={extra}
        extraGames={extraGames}
      />
    ),
    render(<CustomerEmail />),
  ]);
  const [internalHtml, customerHtml] = promises;
  await api.post("/email", {
    recipient: userData.email,
    recipientName: userData.name,
    internalHtml,
    customerHtml,
  });
}
