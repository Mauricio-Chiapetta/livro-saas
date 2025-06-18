import Image from "next/image";
import Logo from "@/images/Logo.svg";
export function Footer() {
  return (
    <footer className="py-16 flex justify-center items-center text-center">
      <div className="container">
        <div className="flex justify-between items-center px-5">
          <Image src={Logo} alt="logo" />
          <span className="text-gray"> &copy; {new Date().getFullYear()} LivroSaaS | Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
