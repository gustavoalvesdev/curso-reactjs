import { Card } from "@/components/Card";
import { Circle } from "@/components/Circle";

function Page() {
  return <>
    <h1 className="font-bold text-2xl">Olá, mundo!</h1>
    <h3>Algum outro texto!</h3>
    <Card>
      <>
        <h3 className="text-3xl font-bold italic">"Frase de Efeito"</h3>
        <p className="text-right text-sm">Autor desconhecido</p>
        <Circle />
      </>
    </Card>
  </>;
  
}

export default Page;