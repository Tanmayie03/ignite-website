export const handleCashfreeWebhook = async (req, res) => {
  try {
    const event = req.body?.event;
    const order = req.body?.data?.order;

    if (!event || !order || !order.order_id) {
      return res.status(400).json({ error: "Missing required data" });
    }

    const { order_id, payment_status } = order;

    console.log("Received order_id:", order_id);
    console.log("Payment status:", payment_status);

    if (event === "ORDER.PAID") {
      if (payment_status !== "PAID") {
        return res.status(400).json({ error: "Payment is not successful" });
      }

      const registration = await Registration.findOne({ ticket_id: order_id });

      if (!registration) {
        console.log("No registration found for order_id:", order_id);
        return res.status(404).json({ error: "Registration not found" });
      }

      console.log("Registration found:", registration);

      registration.payment_status = "COMPLETED";
      registration.confirmed = true;
      await registration.save();

      console.log("Registration updated:", registration);
    }

    if (event === "ORDER.FAILED") {
      const registration = await Registration.findOne({ ticket_id: order_id });

      if (registration) {
        registration.payment_status = "FAILED";
        registration.confirmed = false;
        await registration.save();

        console.log("Registration marked as FAILED:", registration);
      }
    }

    res.status(200).json({ message: "Webhook received" });
  } catch (error) {
    console.error("Webhook error:", error.message);
    res.status(500).json({ error: "Failed to process webhook" });
  }
};
