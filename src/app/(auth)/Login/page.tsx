import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/Logo.svg";
import { Navbar } from "@/components/(HomeSections)/Navbar";
import { Footer } from "@/components/(HomeSections)/Footer";

export const metadata = {
  title: "LivroSaaS | Login",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="py-28 h-screen flex justify-center items-center">
        <div className="container flex flex-col items-center text-center">
          <Image src={Logo} alt="logo" className="dark:invert" />
          <Card className="max-w-sm w-full rounded-2xl mt-12">
            <CardHeader>
              <h2 className="text-xl font-bold">Boas Vindas</h2>
              <CardDescription>
                Faça seu login com email e senha.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label>Email</Label>
                <Input type="email" name="email" placeholder="eu@exemplo.com"className="mt-2" />
              </div>
              <div className="mt-2">
                <Label>Senha</Label>
                <Input type="password" name="password" placeholder="********" className="mt-2"/>
              </div>
              <div>
                <Button className="w-full mt-6" type="submit">
                  Login
                </Button>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground mt-3">
            Não possui cadastro?{" "}
            <Link className="text-gray-800 hover:underline" href="/Cadastro">
              Registre-se
            </Link>
            .
          </p>
        </div>
      </section>
      <Footer/>
    </>
  );
}
