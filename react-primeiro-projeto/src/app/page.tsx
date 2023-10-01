import Quadrado, { Circle as Circulo } from "@/components/Geometry";

function Page() {
  return <>
    <h1 className="font-bold text-2xl">Olá, mundo!</h1>
    <h3>Algum outro texto!</h3>

    <Quadrado />  
    <Circulo />
  </>;
  
}

export default Page;