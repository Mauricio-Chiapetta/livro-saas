"use client";
import { Card } from "../ui/Card";
import { motion } from "motion/react";
export function Price() {
  return (
    <section className="py-28 flex justify-center">
      <div className="container">
        <motion.h1
          className="text-3xl font-bold text-center md:text-7xl"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.3, ease: "easeIn" },
          }}
        >
          Preço Simples e Transparente
        </motion.h1>
        <motion.p className="text-center mt-8 text-gray/90"
        
         initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.3, ease: "easeIn" },
          }}>
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
          para você? <br />
          Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um
          ebook novo de <br />
          programação. E por menos de um café por dia.{" "}
        </motion.p>
        <div className="mt-28">
          <Card />
        </div>
      </div>
    </section>
  );
}
