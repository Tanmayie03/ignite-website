import express from "express";
import {
  initiatePayment,
  paymentCallback,
  paymentWebhook,
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/initiate", initiatePayment);
router.get("/callback", paymentCallback);
router.post("/webhook", express.json(), paymentWebhook);

export default router;
