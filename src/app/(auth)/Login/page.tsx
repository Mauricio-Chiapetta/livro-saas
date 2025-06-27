import Logo from "@/assets/images/Logo.svg";
import { auth } from "../../../../auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "./login-form";
import { redirect } from "next/navigation";

export const metadata = {
  title: "LivroSaaS | Login",
};

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/dashboard");
  }
  return (
    <>
      <Link href={"/"}>
        <Image src={Logo} alt="logo" className="dark:invert" />
      </Link>
      <Card className="max-w-sm w-full rounded-2xl mt-12">
        <CardHeader>
          <h2 className="text-xl font-bold">Boas Vindas</h2>
          <CardDescription>Faça seu login com email e senha.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground mt-3">
        Não possui cadastro?{" "}
        <Link className="text-gray-800 hover:underline" href="/Cadastro">
          Registre-se
        </Link>
        .
      </p>
    </>
  );
}
