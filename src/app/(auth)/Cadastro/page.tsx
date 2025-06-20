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
import Logo from "@/assets/images/Logo.svg"
import Image from "next/image";
import { Footer } from "@/components/(HomeSections)/Footer";


export const metadata = {
  title: "LivroSaaS | Cadastro",
};

export default async function RegisterPage() {
  return (
    <>
      <section className="py-24 h-screen flex justify-center">
        <div className="container flex items-center text-center flex-col">
            <Image src={Logo} alt="Logo" className="dark:invert"/>
          <Card className="max-w-sm w-full rounded-2xl mt-12">
            <CardHeader>
              <h2 className="text-xl font-bold">Cadastre-se</h2>
              <CardDescription>
                Faça seu cadastro gratuitamente.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label>Nome</Label>
                <Input type="text" name="name" placeholder="Fulano de Tal" className="mt-2"/>
              </div>
              <div className="mt-2">
                <Label>Email</Label>
                <Input type="email" name="email" placeholder="eu@exemplo.com" className="mt-2"/>
              </div>
              <div className="mt-2">
                <Label>Senha</Label>
                <Input type="password" name="password" placeholder="********" className="mt-2"/>
              </div>
              <div>
                <Button className="w-full mt-6" type="submit">
                  Registrar
                </Button>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground mt-3">
            Já possui cadastro?{" "}
            <Link className="text-gray-800 hover:underline" href="/Login">
              Faça o login
            </Link>
            .
          </p>
        </div>
      </section>
      <Footer/>
    </>
  );
}
