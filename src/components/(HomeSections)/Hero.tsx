"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "motion/react";
export function Hero() {
  return (
    <section className="py-40 flex justify-center">
      <div className="container">
        <div className="flex flex-col gap-4">
          <motion.h1
            className="text-3xl font-bold text-center md:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Simplifique Seus Estudos
          </motion.h1>
          <motion.p
            className="text-gray/90 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Deixe que nós fazemos a curadoria para você. Assine nossa plataforma
            e receba todos os
            <br /> meses um ebook novo de programação.
          </motion.p>
        </div>

        <motion.form
          className="flex max-w-md text-center justify-center items-center mx-auto mt-16 gap-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ease: "anticipate", duration: 0.3 }}
        >
          <Input
            className="shadow-md"
            placeholder="Coloque seu Email"
            type="email"
          />
          <Button className="bg-black font-normal dark:bg-white dark:hover:bg-gray">
            Assine Agora
          </Button>
        </motion.form>
        <motion.p
          className="text-xs text-gray/90 text-center mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Comece sua assinatura agora mesmo. Cancele quando quiser.{" "}
        </motion.p>
      </div>
    </section>
  );
}
