import { captureOrder } from "../../config";

export async function POST(req, { params }) {
  try {
    const { orderID } = params;
    console.log(params);
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    return Response.json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    throw Response.json({ error: "Failed to create order." });
  }
}
