"use server";
import { revalidatePath } from "next/cache";
import Stripe from "stripe";
export async function cancelSubscriptionAction(FormData: FormData) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");

  const subscriptionId = FormData.get("subscriptionId") as string;

  stripe.subscriptions.cancel(subscriptionId);

  revalidatePath('/dashboard/minha-assinatura')
}
