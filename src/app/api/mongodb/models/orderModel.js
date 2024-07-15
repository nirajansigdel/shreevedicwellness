import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    client_name: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String },
    class: { type: String },
    class_type: { type: String },
    class: { type: String },
    session_date: { type: Date },
    session_time: { type: String },
    session_pricing: { name: { type: String }, price: { type: String } },
    payment_orderID: { type: String },
    payment_status: {
      type: String,
      enum: ["NOT PAID", "COMPLETED", "FAILED", "REFUNDED"],
      default: "NOT PAID",
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel =
  mongoose.models.Order ?? mongoose.model("Order", orderSchema);
