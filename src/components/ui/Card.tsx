import { Check } from "lucide-react";
import { Button } from "./button";

export function Card() {
  const cardItems = [
    "1 ebook por mês",
    "Curadoria especial",
    "Acesso ilimitado",
    "Cancele a qualquer momento",
  ];
  return (
    <div className="flex justify-center items-start">
      <div className="flex flex-col px-9 py-5 bg-white rounded-3xl max-w-3xl border border-gray shadow-2xl">
        <h1 className="font-semibold text-2xl dark:text-black">
          Plano Pro Premium VIP
        </h1>
        <p className="text-gray/90 text-sm text-center">
          Tudo que você precisa para seus estudos
        </p>
        <div className="mt-4">
          <h1 className="font-semibold sm:text-3xl dark:text-black text-2xl">
            R$29 <span className="text-gray text-lg font-normal">/ mês</span>
            <div className="mt-3">
              {cardItems.map((i) => (
                <h4 className="text-gray text-sm flex items-center" key={i}>
                  <Check className="text-green-500" />
                  {i}
                </h4>
              ))}
            </div>
          </h1>
        </div>
        <Button className="mt-8 dark:bg-black dark:hover:bg-gray dark:text-white">
          Assine Agora
        </Button>
      </div>
    </div>
  );
}
