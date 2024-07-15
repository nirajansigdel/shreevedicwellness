import { createOrder } from "../config";
import connectToDatabase from "../../mongodb/connect";
import { OrderModel } from "../../mongodb/models/orderModel";

export async function POST(req, res) {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    await connectToDatabase();

    const data = await req.json();
    const { order_id } = data;

    const order = await OrderModel.findById(order_id);

    if (!order) {
      return Response.json({ error: "Order does not exist" }, { status: 400 });
    }

    console.log("Order found", order);

    const { jsonResponse, httpStatusCode } = await createOrder(order);

    return Response.json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    return Response.json({ error: "Failed to create order." });
  }
}
