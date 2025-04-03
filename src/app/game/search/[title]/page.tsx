import Image         from 'next/image'
import gameCry       from '../../../../../public/FailGame (1).png'
import { Input }     from "@/app/components/input";
import { GameCard }  from "@/app/components/gameCard";
import { Container } from "@/app/components/container";
import { GameProps } from "@/utils/types/game";
import { Metadata } from 'next';

export const metadata: Metadata ={

    title: "Buscar jogos",
    description: "Buscador de jogos"
}

const gamesData = async(title:string)=>{

    try {
        
        const decodeTitle = decodeURI(title)
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`)

        console.log(`Status da resposta: ${decodeTitle}`);
        return res.json();

    } catch (error) {
        
        console.log(`Erro ao buscar o título ${title}: ${error}`);
        return null;
    }
}

export default async function Search(
    {
        params: {title}
    }:{
        params: {title: string}
    }

){

    const games:GameProps[] = await gamesData(title)

    return(
        <main className="w-full text-black ">
            
            <Container>

                <Input 
                    placeholder="I looked for the desired game..."
                />

                <div className="font-bold text-xl mt-89 text-white">
                    {
                        games ?
                            (
                                <h1 className='mb-6 text-2xl'>Look what we found in our library:</h1>
                            ):(
                                <div className="flex flex-col xs:-mt-96 -mt-56 items-center justify-center min-h-screen text-center p-10 space-y-10">
                                    <h1 className="text-sm xs:text-2xl font-semibold text-orange-500">Oops, we couldn't find this game in our library...</h1>
                                    
                                    <Image  
                                        src={gameCry}
                                        alt="Controle de videogame triste"
                                        width={300}
                                        height={400}
                                        className='w-40 h-30 object-cover xs:w-80 xs:h-70'
                                    />

                                    <strong className="text-2lg text-blue-600">Search for another game, don't get discouraged!</strong>
                                </div>

                            )
                    }
                </div>

                <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-screen">
               
                           { 
                            games &&
                                games.map(
                                    (item) => (
                                        <GameCard key={item.id} data={item}/>
                                    )
                                )
                           }
               
                </section>

            </Container>

        </main>
    )
}