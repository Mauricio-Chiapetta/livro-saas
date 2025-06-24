"use client";
import { CallToAction } from "@/components/(HomeSections)/CalltoAction";
import { Hero } from "@/components/(HomeSections)/Hero";
import { HowWork } from "@/components/(HomeSections)/HowWork";
import { Navbar } from "@/components/(HomeSections)/Navbar";
import { Price } from "@/components/(HomeSections)/Price";
import { ScrollLinked } from "@/components/ui/ScrollLinked";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/Login";
  const buttonLabel = isLoginPage ? "Home" : "Login";
  const buttonLink = isLoginPage ? "/" : "/Login";
  const links = [
    { label: "Funcionamento", href: "/" },
    { label: "Preço", href: "/" },
  ];
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <ScrollLinked />
      <Navbar
        links={links}
        actionButton={{ label: buttonLabel, href: buttonLink }}
      />
      <Hero />
      <HowWork />
      <Price />
      <CallToAction />
    </>
  );
}
