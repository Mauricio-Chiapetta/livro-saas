"use client";
import { useCallback } from "react";
import { Button } from "./ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";

type PaymentButtonProps = {
  children: React.ReactNode;
};
export function PaymentButton({ children }: PaymentButtonProps) {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
  );

  const fetchClientSecret = useCallback(() => {
    return fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data.client_secret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full cursor-pointer">{children}</Button>
      </DialogTrigger>
      <DialogContent>
        <VisuallyHidden.Root>
          <DialogTitle>Assinatura Pro</DialogTitle>
        </VisuallyHidden.Root>

        <div id="checkout">
          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
}
