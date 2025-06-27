import { auth } from "../../../auth";
import { Navbar } from "@/components/(HomeSections)/Navbar";
import { ToggleProfile } from "@/components/ui/ToggleProfile";
import { redirect } from "next/navigation";
export const metadata = {
  title: "LivroSaaS | Dashboard",
};
const links = [
  { label: "Livro do Mês", href: "/dashboard" },
  { label: "Minha assinatura", href: "/dashboard/minha-assinatura" },
];
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // protegendo a rota /dashboard
  const session = await auth();
  const username = session?.user?.name;
  if (!session) {
    redirect("/Login");
  }
  return (
    <>
      <Navbar
        links={links}
        extraComponent={<ToggleProfile userName={username ?? ""} />}
      />
      <div className="flex flex-col items-center">
        <div className="container py-24 sm:px-10">
          {children}
        </div>
      </div>
    </>
  );
}
