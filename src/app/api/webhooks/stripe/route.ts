import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createTransaction } from "@src/lib/actions/transaction.actions";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Stripe webhook verification failed:", err);
    return NextResponse.json({ message: "Webhook error" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const transaction: CreateTransactionParams = {
      stripeId: session.id,
      amount: session.amount_total ? session.amount_total / 100 : 0,
      plan: session.metadata?.plan || "",
      credits: Number(session.metadata?.credits) || 0,
      buyerId: session.metadata?.buyerId || "",
      createdAt: new Date(),
    };

    const newTransaction = await createTransaction(transaction);
    return NextResponse.json({ message: "Transaction created", transaction: newTransaction });
  }

  return new Response("", { status: 200 });
}
