import Link                 from "next/link";
import Image                from "next/image";
import {Input}              from '@/app/components/input/index'
import { GameCard }         from "@/app/components/gameCard";
import { Container }        from "@/app/components/container";
import { GameProps }        from "@/utils/types/game";
import { CgArrowTopRightR } from "react-icons/cg";
import { Footer }           from "@/app/components/footer";

const getDalyGame = async ()=>{

  try {

    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {next: {revalidate: 15}})
    
    return res.json();
    
  } catch (error) {

    throw new Error(`Tentiva falha do retorno de dados, confira: ${error}`);
  }

}

const getGamesData = async ()=>{

  try {

    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {next: {revalidate: 15}})
    
    return res.json();
    
  } catch (error) {

    throw new Error(`Tentiva falha do retorno de dados, confira: ${error}`);
  }


}

export default async function Home() {

  const dalyGame: GameProps = await getDalyGame();
  const dataGame: GameProps[] = await getGamesData();

  console.log(dalyGame)

  return (
    <>
      <div className="flex flex-col min-h-screen"> {/* Garantir que o layout ocupe toda a altura da tela */}

        <main className="w-full flex-grow"> {/* Permite que o conteúdo ocupe o espaço restante e empurre o footer para baixo */}
          <div className="max-w-screen-xl mx-auto px-3">
            
            <Container>
              
              <h1 className="text-center font-bold text-xl mt-6 mb-5 text-white">We have selected a game exclusively for you</h1>

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

              <Input placeholder="Pesquise pelo jogo desejado..." />

              <h2 className="text-xl text-white font-bold mt-8 mb-5">Jogos que vale a pena conhecer</h2>

              <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                  dataGame.map(
                    (item) => (
                      <GameCard key={item.id} data={item} />
                    )
                  )
                }
              </section>

            </Container>

          </div>
          
        </main>

        <Footer /> {/* Footer será fixado no fim da tela */}

      </div>
    </>
  );
}
