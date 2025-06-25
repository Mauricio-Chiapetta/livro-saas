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
  const username = session?.user?.name
  if (!session) {
    redirect("/Login");
  }
  return (
    <>
      <Navbar
        links={links}
        extraComponent={<ToggleProfile userName={username ?? ''} />}
      />
      <div className="py-24 lg:px-10 px-3 mt-16">
        <div className="container">{children}</div>
      </div>
    </>
  );
}
