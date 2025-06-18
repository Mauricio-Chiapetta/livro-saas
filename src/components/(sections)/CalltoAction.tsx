import { Button } from "../ui/button";

export function CallToAction() {
  return (
    <section className="py-24 flex justify-center">
      <div className="container">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-center md:text-7xl">
            Pronto Para Mudar Sua Vida?
          </h1>
          <p className="text-gray/90 text-center">
            Faça como milhares de outras pessoas. Assine nosso produto e <br />
            tenha garantido seus estudos{" "}
          </p>
          <Button className="md:w-xl self-center w-xs">Assine Agora</Button>
        </div>
      </div>
    </section>
  );
}
