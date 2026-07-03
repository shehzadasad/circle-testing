import Stripe from "stripe";

const stripe = new Stripe(
  "YOUR_STRIPE_SECRET_KEY"
);
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { paymentMethod, paymentDetails } = req.body;
    const { amount, currency, description } = paymentDetails;
    const paymentMethodId = paymentMethod?.id || "";
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: currency,
        payment_method_types: ["card"],
        description:
          description || "Payment from Circle.coo for event registration",
      });
      if (!paymentIntent) {
        return res.send({
          error: "You have no customer created",
        });
      }
      const paymentIntentConfirm = await stripe.paymentIntents.confirm(
        paymentIntent?.id,
        {
          payment_method: paymentMethodId,
          receipt_email: paymentMethod?.billing_details?.email || "",
        }
      );
      return res.json({
        status: "succesfully created",
        paymentIntentConfirm,
        paymentIntent,
      });
    } catch (e) {
      // console.log("state", "error", e?.type, e?.raw?.message);
      res.status(500).json({ message: JSON.stringify(e), errorStatus: 500 });
    }
  } else {
    return res.status(405).end("Method Not Allowed");
  }
}
