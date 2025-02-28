import Image         from 'next/image'
import gameCry       from '../../../../../public/FailGame (1).png'
import { Input }     from "@/components/input";
import { GameCard }  from "@/components/gameCard";
import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";

const gamesData = async(title:string)=>{

    console.log(`Título da busca: ${title}`);

    try {
        const baseUrl = process.env.NEXT_API_URL?.replace(/\/$/, "") || "http://localhost:3000";
        const apiUrl = `${baseUrl}/next-api/?api=game&title=${encodeURIComponent(title)}`;

        console.log(`URL gerada para requisição: ${apiUrl}`);

        const res = await fetch(apiUrl);
        
        console.log(`Status da resposta: ${res.status}`);

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
                    placeholder="Pesquise pelo jogo desejado utilizando uma palavra-chave, como: Mario ou Witcher..."
                />

                <div className="font-bold text-xl mt-89 text-white">
                    {
                        games ?
                        (
                            <h1 className='mb-6'>Olha oque encontramos na nossa biblioteca:</h1>
                        ):(
                            <div className="flex flex-col items-center justify-center min-h-screen text-center p-10 space-y-10">
                                <h1 className="text-4xl font-semibold text-orange-500">Ops, não encontramos este jogo na nossa biblioteca...</h1>
                                
                                <Image  
                                    src={gameCry}
                                    alt="Controle de videogame triste"
                                    width={300}
                                    height={400}
                                />

                                <strong className="text-2lg text-blue-600">Pesquise por outro jogo, não desanime!</strong>
                            </div>

                                                    )
                    }
                </div>

                <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-screen">
               
                           { games &&
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