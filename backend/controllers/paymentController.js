import Registration from "../models/Registration.js";
import {
  createPaymentOrder,
  verifyPayment,
} from "../services/paymentService.js";

export const initiatePayment = async (req, res) => {
  try {
    const { registrationId } = req.body;

    const registration = await Registration.findById(registrationId);
    if (!registration) {
      return res.status(404).json({ error: "Registration not found" });
    }

    const amount = 10;

    const paymentData = await createPaymentOrder(registration, amount);

    registration.payment_order_id = paymentData.orderId;
    registration.payment_attempts += 1;
    await registration.save();

    res.json({
      paymentLink: paymentData.paymentLink,
      orderId: paymentData.orderId,
    });
  } catch (error) {
    console.error("Payment initiation error:", error);
    res.status(500).json({ error: error.message });
  }
};

export const paymentCallback = async (req, res) => {
  try {
    const { orderId, registrationId } = req.query;

    const paymentStatus = await verifyPayment(orderId);

    const registration = await Registration.findById(registrationId);
    if (!registration) {
      return res.status(404).json({ error: "Registration not found" });
    }

    registration.payment_status = paymentStatus.payment_status;

    if (paymentStatus.payment_status === "SUCCESS") {
      registration.confirmed = true;
    }

    await registration.save();

    res.redirect(
      `${process.env.FRONTEND_URL}/payment/status?success=${registration.confirmed}`
    );
  } catch (error) {
    console.error("Payment callback error:", error);
    res.redirect(`${process.env.FRONTEND_URL}/payment/status?success=false`);
  }
};

export const paymentWebhook = async (req, res) => {
  try {
    const cashfreeSignature = req.headers["x-cf-signature"];

    const { orderId, paymentStatus } = req.body;

    await Registration.findOneAndUpdate(
      { payment_order_id: orderId },
      {
        payment_status: paymentStatus,
        confirmed: paymentStatus === "SUCCESS",
      }
    );

    res.status(200).send("OK");
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(500).send("Error processing webhook");
  }
};
