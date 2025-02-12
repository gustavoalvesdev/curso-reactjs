import { Hora } from "@/components/Hora";
import { peopleList } from "@/data/peopleList";

const Page = () => {
  
  const chemists = peopleList.filter(person => person.profession === 'chemist');

  return (

    <div className="bg-blue-500 w-full h-screen flex items-center justify-center">
      <Hora />
    </div>

  );

}

export default Page;