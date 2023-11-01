import { captureOrder } from "../../config";
import { OrderModel } from "../../../mongodb/models/orderModel";
import connectToDatabase from "../../../mongodb/connect";

export async function POST(req, { params }) {
  try {
    await connectToDatabase();
    const { orderID } = params;
    const data = await req.json();
    const { order_id } = data;

    console.log(data);

    const order = await OrderModel.findById(order_id);

    if (!order) {
      return Response.json({ error: "Order does not exist" }, { status: 400 });
    }

    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);

    console.log(jsonResponse);
    if (httpStatusCode === 200 || httpStatusCode === 201) {
      await OrderModel.findByIdAndUpdate(order_id, {
        payment_status: jsonResponse.status,
        payment_orderID: jsonResponse.id,
      });
    }

    return Response.json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    throw Response.json({ error: "Failed to create order." });
  }
}
