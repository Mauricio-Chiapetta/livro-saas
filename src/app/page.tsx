import { auth } from "@/auth";
import { CallToAction } from "@/components/(HomeSections)/CalltoAction";
import { ClientLenis } from "@/components/(HomeSections)/ClientLenis";
import { Hero } from "@/components/(HomeSections)/Hero";
import { HowWork } from "@/components/(HomeSections)/HowWork";
import { Navbar } from "@/components/(HomeSections)/Navbar";
import { Price } from "@/components/(HomeSections)/Price";
import { ScrollLinked } from "@/components/ui/ScrollLinked";

export default async function Home() {
  const session = await auth();
  const buttonLabel = session ? "Dashboard" : "Login";
  const buttonLink = session ? "/dashboard" : "/Login";

  const links = [
    { label: "Funcionamento", href: "/" },
    { label: "Preço", href: "/" },
  ];

  return (
    <>
      <ScrollLinked />
      <Navbar
        links={links}
        actionButton={{ label: buttonLabel, href: buttonLink }}
      />
      <Hero/>
      <HowWork />
      <Price />
      <CallToAction />
      <ClientLenis />
    </>
  );
}
