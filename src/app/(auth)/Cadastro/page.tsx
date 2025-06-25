import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/Card";
import Link from "next/link";
import Logo from "@/assets/images/Logo.svg";
import Image from "next/image";
import { RegisterForm } from "./register-form";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "LivroSaaS | Cadastro",
};

export default async function RegisterPage() {
   const session = await auth();
    if (session) {
      redirect("/dashboard");
    }
  return (
    <>
      <Link href={"/"}>
        <Image src={Logo} alt="Logo" className="dark:invert" />
      </Link>
      <Card className="max-w-sm w-full rounded-2xl mt-12">
        <CardHeader>
          <h2 className="text-xl font-bold">Cadastre-se</h2>
          <CardDescription>Faça seu cadastro gratuitamente.</CardDescription>
        </CardHeader>
        <CardContent>
         <RegisterForm/>
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground mt-3">
        Já possui cadastro?{" "}
        <Link className="text-gray-800 hover:underline" href="/Login">
          Faça o login
        </Link>
        .
      </p>
    </>
  );
}
