import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// Cashfree configuration
const CASHFREE_CONFIG = {
  appId: process.env.CASHFREE_APP_ID,
  secretKey: process.env.CASHFREE_SECRET_KEY,
  apiVersion: "2021-05-21",
  env: process.env.CASHFREE_ENV || "TEST", // or 'PROD' for production
};

const CASHFREE_BASE_URL =
  CASHFREE_CONFIG.env === "PROD"
    ? "https://api.cashfree.com/pg"
    : "https://sandbox.cashfree.com/pg/orders";

export const createPaymentOrder = async (registration, amount) => {
  const orderId = `order_${uuidv4()}`;

  const requestData = {
    order_id: orderId,
    order_amount: amount,
    order_currency: "INR",
    order_note: "Payment for event",
    customer_details: {
      customer_id: registration._id.toString(),
      customer_email: registration.email,
      customer_phone: registration.phone,
      customer_name: registration.name,
    },
    order_meta: {
      return_url: `${process.env.FRONTEND_URL}/payment/callback?registration_id=${registration._id}`,
    },
  };

  const headers = {
    "Content-Type": "application/json",
    "x-client-id": CASHFREE_CONFIG.appId,
    "x-client-secret": CASHFREE_CONFIG.secretKey,
    "x-api-version": CASHFREE_CONFIG.apiVersion,
  };

  try {
    const response = await axios.post(
      `${CASHFREE_BASE_URL}/orders`,
      requestData,
      { headers }
    );

    return {
      orderId,
      paymentSessionId: response.data.payment_session_id,
      paymentLink: response.data.payment_link,
    };
  } catch (error) {
    console.error("Cashfree API error:", error.response?.data || error.message);
    throw new Error("Failed to create payment order");
  }
};

export const verifyPayment = async (orderId) => {
  const headers = {
    "Content-Type": "application/json",
    "x-client-id": CASHFREE_CONFIG.appId,
    "x-client-secret": CASHFREE_CONFIG.secretKey,
    "x-api-version": CASHFREE_CONFIG.apiVersion,
  };

  try {
    const response = await axios.get(
      `${CASHFREE_BASE_URL}/orders/${orderId}/payments`,
      { headers }
    );

    return response.data[0];
  } catch (error) {
    console.error(
      "Cashfree verification error:",
      error.response?.data || error.message
    );
    throw new Error("Failed to verify payment");
  }
};
