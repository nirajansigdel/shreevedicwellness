import { captureOrder } from "../../config";
import { OrderModel } from "../../../mongodb/models/orderModel";
import connectToDatabase from "../../../mongodb/connect";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(req, { params }) {
  try {
    await connectToDatabase();
    const { orderID } = params;
    const data = await req.json();
    const { order_id } = data;

    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);

    console.log(jsonResponse);

    if (httpStatusCode === 200 || httpStatusCode === 201) {
      await OrderModel.findByIdAndUpdate(order_id, {
        payment_status: jsonResponse.status,
        payment_orderID: jsonResponse.id,
      });

      const order = await OrderModel.findById(order_id);
      if (!order) {
        return Response.json(
          { error: "Order does not exist" },
          { status: 400 }
        );
      }

      const sendMail = await resend.emails.send({
        from: `${order.client_name} <registration@resend.dev>`,
        to: ["shreejanauprety7@gmail.com"],
        subject: "New Client Registration",
        html: `
              <h4>Hi Shreejana 👋</h4>
              <p>There is a new registration!</p>

              <h5>Client Information</h5>

              <p>Name: ${order?.client_name}</p>
              <p>Email: ${order?.email}</p>
              <p>Country: ${order?.country}</p>

              <div>
                <h5>Session Detailts</h5>
                <p>Class: ${order?.class}</p>
                <p>Class Type: ${order?.class_type}</p>
                <p>Session Date: ${new Date(
                  order?.session_date
                ).toDateString()}</p>
                <p>Session Time: ${order?.session_time}</p>
                <p>Payment Status: ${jsonResponse?.status}</p>
              </div>
        `,
      });
    }

    return Response.json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    throw Response.json({ error: "Failed to create order." });
  }
}
