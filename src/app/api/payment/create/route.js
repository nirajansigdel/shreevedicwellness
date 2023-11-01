import { createOrder } from "../config";
import connectToDatabase from "../../mongodb/connect";

export async function POST(req, res) {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    await connectToDatabase();

    const data = await req.json();
    const { order_id } = data;

    const { jsonResponse, httpStatusCode } = await createOrder(order_id);

    return Response.json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    return Response.json({ error: "Failed to create order." });
  }
}
