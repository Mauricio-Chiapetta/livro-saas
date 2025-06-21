import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/assets/images/Logo.svg";
import Image from "next/image";

export const metadata = {
  title: "Página não encontrada",
};
export default function NotFound() {
  return (
    <div className="h-screen flex justify-center">
      <div className="container flex flex-col items-center justify-center gap-6">
        <Image src={Logo} alt="Logo" className="opacity-55 dark:invert" />
        <h1 className="font-bold text-transparent bg-gradient-to-b from-red-700 via-red-500 to-red-400 bg-clip-text text-9xl hover:scale-110 transition-all duration-300">
          404
        </h1>
        <p className="text-gray text-xs">página não encontrada!</p>
        <Link href={"/"}>
          <Button className="cursor-pointer">Voltar</Button>
        </Link>
      </div>
    </div>
  );
}
