"use client";
import { CallToAction } from "@/components/(sections)/CalltoAction";
import { Footer } from "@/components/(sections)/Footer";
import { Hero } from "@/components/(sections)/Hero";
import { HowWork } from "@/components/(sections)/HowWork";
import { Navbar } from "@/components/(sections)/Navbar";
import { Price } from "@/components/(sections)/Price";
import Lenis from "lenis";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time:any) {
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
