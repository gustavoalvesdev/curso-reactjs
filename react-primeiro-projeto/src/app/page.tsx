import { Card } from "@/components/Card";
import { Circle } from "@/components/Circle";

function Page() {
  return <>
    <h1 className="font-bold text-2xl">Olá, mundo!</h1>
    <h3>Algum outro texto!</h3>
    <Card phrase="Alguma frase TOP" author="Algum cara" />
  </>;
  
}

export default Page;