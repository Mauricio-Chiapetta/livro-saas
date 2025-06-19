"use client";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export function CallToAction() {
  return (
    <section className="py-24 flex justify-center">
      <div className="container">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.3, ease: "easeIn" },
          }}
        >
          <h1 className="text-3xl font-bold text-center md:text-7xl">
            Pronto Para Mudar Sua Vida?
          </h1>
          <p className="text-gray/90 text-center">
            Faça como milhares de outras pessoas. Assine nosso produto e <br />
            tenha garantido seus estudos{" "}
          </p>
          <Button className="md:w-xl self-center w-xs">Assine Agora</Button>
        </motion.div>
      </div>
    </section>
  );
}
