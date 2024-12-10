import { Person } from "@/components/Person";

function Page() {
  return <>
    <h1 className="font-bold text-2xl">Olá, mundo!</h1>
    <h3>Algum outro texto!</h3>

    <Person
      name="Elon Musk"
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTam7dK4a6nCf6yhn8M0RPFBa1yIbNrD_9EUJ3NNEk7-o0KGCIZ"
      roles={['CEO da Tesla',
        'CEO da SpaceX']}
    />

    <Person
      name="Jeff Bezos"
      avatar="https://www.infomoney.com.br/wp-content/uploads/2019/06/jeff-bezos-1.jpg?fit=900%2C600&quality=50&strip=all"
      roles={['CEO da Amazon',
        'CEO da Blue Origin']}
    />

    <Person 
      name="João"
      roles={['Algo', 'Dono de algo']}
    />
  </>;
  
}

export default Page;