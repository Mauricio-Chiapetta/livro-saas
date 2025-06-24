"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";
import { useActionState } from "react";
import loginAction from "./loginAction"

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <>
      {state?.success === false && (
        <div className="bg-red-200 p-5 rounded-md border border-red-500 text-red-500 font-medium text-xs mb-2">
          {state.error}
        </div>
      )}
      <Form action={formAction}>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="eu@exemplo.com"
            className="mt-2"
          />
        </div>
        <div className="mt-2">
          <Label>Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            className="mt-2"
          />
        </div>
        <div>
          <Button className="w-full mt-6" type="submit" disabled={isPending}>
            Login
          </Button>
        </div>
      </Form>
    </>
  );
}
