// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "manoram@estorediz.com",
      to: ["baudelmanoram123@gmail.com"],
      subject: "New Session Registration!",
      //   react: EmailTemplate({ firstName: "John" }),
      html: "<p>Hi Shreejana 👋</p><p>There is no new registration!</p>",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
