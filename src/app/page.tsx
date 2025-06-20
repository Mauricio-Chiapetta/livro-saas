"use client";
import { CallToAction } from "@/components/(HomeSections)/CalltoAction";
import { Footer } from "@/components/(HomeSections)/Footer";
import { Hero } from "@/components/(HomeSections)/Hero";
import { HowWork } from "@/components/(HomeSections)/HowWork";
import { Navbar } from "@/components/(HomeSections)/Navbar";
import { Price } from "@/components/(HomeSections)/Price";
import Lenis from "lenis";
import { useEffect } from "react";
export default function Home() {
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
      <Navbar />
      <Hero />
      <HowWork />
      <Price />
      <CallToAction />
      <Footer />
    </>
  );
}
