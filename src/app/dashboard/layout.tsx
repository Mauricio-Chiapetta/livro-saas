import { Navbar } from "@/components/(HomeSections)/Navbar";
import { ToggleProfile } from "@/components/ui/ToggleProfile";
export const metadata = {
  title: "LivroSaaS | Dashboard",
};
const links = [
    { label: "Livro do Mês", href: "/" },
    { label: "Minha assinatura", href: "/" },
]
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <>
      <Navbar links={links} extraComponent={<ToggleProfile userName="Mauricio"/>}/>
      <div className="py-24 lg:px-10 px-3 mt-16">
        <div className="container">{children}</div>
      </div>
    </>
  );
}
