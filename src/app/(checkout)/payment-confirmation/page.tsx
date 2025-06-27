import Logo from "@/assets/images/Logo.svg";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
export const metadata = {
  title: "Parabéns!",
};
export default function PaymentConfirmation() {
  return (
    <>
      <Link href={"/"} className="mb-12">
        <Image src={Logo} alt="logo" className="mx-auto hover:opacity-50 dark:invert" />
      </Link>
      <Card className="lg:w-lg sm:w-md shadow-md text-center">
        <ShoppingBag className="w-16 h-16 text-green-500 mx-auto" />
        <CardContent>
          <CardHeader>
            <CardTitle className="text-4xl">
              Assinatura confirmada!
            </CardTitle>
            <CardDescription>
              Obrigado por se juntar a nossa comunidade LivroSaaS
            </CardDescription>
          </CardHeader>

          <div className="text-sm mt-2 text-gray-700 font-medium">
            <p>
              Sua assinatura foi processada com sucesso e sua conta está ativa
            </p>
            <p>Agora é só aproveitar o nosso conteúdo</p>
          </div>
          <Link href={"/dashboard"} className={cn(buttonVariants(), "mt-12")}>
            Ir para Dashboard
          </Link>
        </CardContent>
      </Card>
    </>
  );
}
