import express from "express";
import {
  publicEvents,
  publicEventDetail,
  registerForEvent,
} from "../controllers/publicController.js";
// import { createPaymentOrder } from "../controllers/paymentController.js";

const router = express.Router();

router.get("/events", publicEvents);
router.get("/event/:event_id", publicEventDetail);
router.post("/event/:event_id/register", registerForEvent);
// router.post("/initiate-payment/:registrationId", createPaymentOrder);
// router.post("/webhook", paymentWebhook);
// router.post("/event/:event_id/confirm/:registraion_id", confirmPayment);
// router.post("/event/:event_id/confirm/:registraion_id", confirmPayment);

export default router;
