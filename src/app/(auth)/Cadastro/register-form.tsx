"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";
import { useActionState } from "react";
import registerAction from "./registerAction";

export function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null);

  return (
    <>
      {state?.success === false && (
        <div
          className="text-xs border border-red-500 bg-red-100 rounded-md relative text-red-600 p-4 flex flex-col text-start mt-2"
          role="alert"
        >
          <strong className="font-bold">Erro!</strong>
          <span className="block sm:inline">{state?.message}</span>
        </div>
      )}
      <Form action={formAction}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            name="name"
            placeholder="Fulano de Tal"
            className="mt-2"
          />
        </div>
        <div className="mt-2">
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
            Registrar
          </Button>
        </div>
      </Form>
    </>
  );
}
