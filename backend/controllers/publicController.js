import Event from "../models/Event.js";
import Registration from "../models/Registration.js";
import { v4 as uuidv4 } from "uuid";

export const publicEvents = async (req, res) => {
  try {
    const events = await Event.find().select("-description -internalNotes");
    res.json(events);
  } catch (error) {
    console.error("Fetch Events Error:", error.message);
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

export const publicEventDetail = async (req, res) => {
  try {
    const event = await Event.findById(req.params.event_id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
  } catch (error) {
    console.error("Fetch Event Detail Error:", error.message);
    res.status(500).json({ error: "Failed to fetch event details" });
  }
};

export const registerForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.event_id);
    if (!event) return res.status(404).json({ error: "Event not found" });

    const registration = await Registration.create({
      ...req.body,
      event: req.params.event_id,
      ticket_id: `ticket_${uuidv4()}`,
      payment_status: "PENDING",
    });

    res.status(201).json({
      ...registration.toObject(),
      event_details: {
        title: event.title,
        date: event.date,
        price: event.price,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error.message);
    const status = error.name === "ValidationError" ? 400 : 500;
    res.status(status).json({ error: error.message || "Registration failed" });
  }
};
