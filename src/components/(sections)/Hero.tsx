import { Input } from "../ui/input";
import { Button } from "../ui/button";
export function Hero() {
  return (
    <section className="py-24 flex justify-center bg-cover bg-center">
      <div className="container">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-center md:text-7xl">
            Simplifique Seus Estudos
          </h1>
          <p className="text-gray/90 text-center">
            Deixe que nós fazemos a curadoria para você. Assine nossa plataforma
            e receba todos os
            <br /> meses um ebook novo de programação.
          </p>
        </div>

        <form className="flex max-w-md text-center justify-center items-center mx-auto mt-16 gap-4">
          <Input
            className="shadow-md"
            placeholder="Coloque seu Email"
            type="email"
          />
          <Button className="bg-black font-normal dark:bg-white dark:hover:bg-gray">Assine Agora</Button>
        </form>
        <p className="text-xs text-gray/90 text-center mt-3">
          Comece sua assinatura agora mesmo. Cancele quando quiser.{" "}
        </p>
      </div>
    </section>
  );
}
