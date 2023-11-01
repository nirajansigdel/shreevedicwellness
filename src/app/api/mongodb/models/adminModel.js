import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    email: { type: String },
    username: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

export const AdminModel =
  mongoose.model.Admin ?? mongoose.model("Admin", adminSchema);
