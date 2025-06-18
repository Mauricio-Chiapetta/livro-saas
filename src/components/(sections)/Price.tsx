import { Card } from "../ui/Card";

export function Price() {
  return (
    <section className="py-28 flex justify-center">
      <div className="container">
        <h1 className="text-3xl font-bold text-center md:text-7xl">
          Preço Simples e Transparente
        </h1>
        <p className="text-center mt-8 text-gray/90">
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
          para você? <br />
          Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um
          ebook novo de <br />
          programação. E por menos de um café por dia.{" "}
        </p>
        <div className="mt-28">
          <Card />
        </div>
      </div>
    </section>
  );
}
