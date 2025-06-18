import Image from "next/image";
import woman from "@/images/woman.svg";
import { Check } from "lucide-react";
const items = [
  "Acesso a 1 ebook por mês",
  "Curadoria especial",
  "Cancele quando quiser",
];
export function HowWork() {
  return (
    <section className="py-32 flex justify-center">
      <div className="container">
        <h1 className="font-bold text-4xl text-center">Como funciona?</h1>
        <div className="grid grid-cols-2 place-items-center mt-8">
          <div>
            <Image src={woman} alt="woman" />
          </div>
          <div className="flex flex-col gap-4">
            {items.map((i) => (
              <h3 className="text-gray/90 flex items-center gap-5 text-xl" key={i}>
                {i}
                <Check className="text-green-500" />
              </h3>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
