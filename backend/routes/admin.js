import express from "express";
import adminAuth from "../middleware/AdminAuth.js";
import { register, login, logout } from "../controllers/adminAuthController.js";
import {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent,
  fetchRegistrations,
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", adminAuth, logout);

router.get("/events", adminAuth, getEvents);
router.post("/event/create", adminAuth, createEvent);
router.get("/event/:event_id", adminAuth, getEvent);
router.post("/event/:event_id/update", adminAuth, updateEvent);
router.delete("/event/:event_id", adminAuth, deleteEvent);
router.get("/event/:event_id/registrations", adminAuth, fetchRegistrations);

export default router;
