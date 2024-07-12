import connectToDatabase from "../mongodb/connect";
import { OrderModel } from "../mongodb/models/orderModel";

export async function POST(req) {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    await connectToDatabase();
    const data = await req.json();
    const order = data;
    console.log(order);
    const newOrder = new OrderModel(order);
    const saveNewOrder = await newOrder.save();
    console.log(saveNewOrder);
    if (!saveNewOrder)
      return Response.json({ error: "Failed to create order." });
    return Response.json(newOrder);
  } catch (error) {
    console.error("Failed to create order:", error);
    return Response.json({ error: "Failed to create order." });
  }
}

export async function GET(req) {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    await connectToDatabase();

    const orders = await OrderModel.find();
    return Response.json(orders);
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return Response.json({ error: "Failed to fetch orders." });
  }
}
