"use client";
import Image from "next/image";
import woman from "@/assets/images/woman.svg";
import { Check } from "lucide-react";
import { motion } from "motion/react";
const items = [
  "Acesso a 1 ebook por mês",
  "Curadoria especial",
  "Cancele quando quiser",
];
export function HowWork() {
  return (
    <section className="py-32 flex justify-center">
      <div className="container">
        <motion.h1
          className="font-bold text-4xl text-center"
          initial={{ opacity: 0, y: -50}}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeIn" },
          }}
          viewport={{once:true}}
        >
          Como funciona?
        </motion.h1>
        <div className="grid grid-cols-2 place-items-center mt-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            viewport={{once:true}}
          >
            <Image src={woman} alt="woman" />
          </motion.div>
          <div className="flex flex-col gap-4">
            {items.map((i) => (
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
               viewport={{once:true}}
                className="text-gray/90 flex items-center gap-5 text-xl"
                key={i}
              >
                {i}
                <Check className="text-green-500" />
              </motion.h3>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
