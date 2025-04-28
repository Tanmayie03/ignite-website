import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const RegistrationSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  ticket_id: {
    type: String,
    default: () => `ticket_${uuidv4()}`,
    unique: true,
  },
  cf_order_id: String,
  cashfree_order_id: String,
  payment_status: {
    type: String,
    enum: ["PENDING", "COMPLETED", "FAILED"],
    default: "PENDING",
  },
  payment_details: mongoose.Schema.Types.Mixed,
  payment_attempts: { type: Number, default: 0 },
  last_verification: Date,
  confirmed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Registration", RegistrationSchema);
