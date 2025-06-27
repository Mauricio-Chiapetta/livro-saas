"use server";
import { redirect } from "next/navigation";
import Stripe from "stripe";
export async function cancelSubscriptionAction(formData: FormData) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");

  const subscriptionId = formData.get("subscriptionId") as string;

  stripe.subscriptions.cancel(subscriptionId);

  redirect('/dashboard/minha-assinatura')
}
