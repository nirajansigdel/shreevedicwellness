import { createOrder } from "../config";

export async function POST(req, res) {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const { cart } = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    return Response.json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    return Response.json({ error: "Failed to create order." });
  }
}
