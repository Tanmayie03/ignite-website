import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  starts_from: Date,
  ends_to: Date,
  status: {
    type: String,
    enum: ["active", "inactive", "completed"],
    default: "active",
  },
  type: { type: String, enum: ["online", "offline"], required: true },
  joining_link: {
    type: String,
    required: function () {
      return this.type === "online";
    },
  },
  images: [{ url: String, isDefault: Boolean, isBanner: Boolean }],
  banner_image: { type: String, required: true },
  ticket_name: String,
  ticket_quantity: { type: Number, min: 0 },
  ticket_price: { type: Number, min: 0 },
  ticket_type: { type: String, enum: ["paid", "free"], required: true },
});

export default mongoose.model("Event", EventSchema);
