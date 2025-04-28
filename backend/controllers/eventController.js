import Event from "../models/Event.js";
import Registration from "../models/Registration.js";

export const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.event_id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.event_id, req.body, {
      new: true,
    });
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.event_id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json({ msg: "Event deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const fetchRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({
      event: req.params.event_id,
    });
    res.json(registrations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
