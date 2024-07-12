export async function GET(req, { params }) {
  try {
    const { orderID } = params;

    // use the cart information passed from the front-end to calculate the order amount detals
    await connectToDatabase();

    const orders = await OrderModel.findById(orderID);
    return Response.json(orders);
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return Response.json({ error: "Failed to fetch orders." });
  }
}
