import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Link from "next/link";
import Image from "next/image";
import { CgArrowTopRightR } from "react-icons/cg";

const getDalyGame = async ()=>{

  try {

    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {next: {revalidate: 100}})
    
    return res.json();
    
  } catch (error) {

    throw new Error(`Tentiva falha do retorno de dados, confira: ${error}`);
  }

}

export default async function Home() {

  const dalyGame: GameProps = await getDalyGame(); 

  console.log(dalyGame)
  
  return (
    <main className="w-full">

      <div className="max-w-screen-xl mx-auto px-3">
        
        <Container>
          
          <h1 className="text-center font-bold text-xl mt-6 mb-5">Separamos uma indicação de jogo para você</h1>

          <Link href={`/game/${dalyGame.id}`}>

            <section className="w-full bg-black rounded-lg">

              <div className="w-full max-h-96 h-96 relative rounded-lg">

               <div className="absolute z-20 bottom-0 p-5 flex justify-between items-center w-full gap-2">
                  <strong className="font-bold text-xl text-white flex items-center gap-2">
                    {dalyGame.title} 
                    <CgArrowTopRightR size={24} color="#FFF"/>
                  </strong>
                </div>

                <Image 
                  src={dalyGame.image_url}
                  alt={dalyGame.title}
                  priority={true}
                  quality={100}
                  fill={true}
                  className="max-h-120 object-cover rounded-lg opacity-50 hover:opacity-80 transition-all duration-500 ease-in-out"
                  sizes="(max-width: 900px) 100vw, (max-width: 1200px) 33vw"

                />

              </div>


            </section>

          </Link>

        </Container>

      </div>
      
    </main>
  );
}
