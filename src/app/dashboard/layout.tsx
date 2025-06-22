import { redirect } from "next/navigation";
import { Navbar } from "@/components/(HomeSections)/Navbar";
export const metadata = {
  title: "LivroSaaS | Dashboard",
};
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar userName={"Mauricio"} />
      <div className="py-12 lg:px-10 px-3 mt-16">
        <div className="container ">{children}</div>
      </div>
    </>
  );
}
