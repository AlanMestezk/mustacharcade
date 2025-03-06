import { GameProps } from "@/utils/types/game"
import { redirect }  from "next/navigation"
import Image from 'next/image'
import { Container } from "@/components/container"
import { Label } from "./components/label"
import { GameCard } from "@/components/gameCard"

///next-api/?api=game&id=
//next-api/?api=game_day

const getData = async (id: string) =>{

    try {

        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, {next: {revalidate: 60}})

        return res.json()
        
    } catch (error) {
        
        throw new Error(`Não foi possivel buscar pelo id ${id} - Error: ${error}`)
    }
}

const getGamesSorted = async()=>{

    try {

        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`,  {cache: 'no-store'})

        return res.json();
        
    } catch (error) {

        throw new Error(`Não foi possivel buscar pelo jogo - Error: ${error}`)
    }
}

export default async function GameDetail ({
    params:{id}
}:{
    params:{id:string}
}){

    const data      : GameProps = await getData(id)
    const gameSorted: GameProps = await getGamesSorted()

    console.log(gameSorted)
    
    if(!data){
        redirect('/')
    }

    return(
        <main className="w-full text-white">
            

            <Container>

                <div className="bg-clack sm:h-96 h-80 w-700 relative mt-4">

                    <Image 
                        className="max-h-120 object-cover opacity-80 "
                        sizes="(max-width: 900px) 100vw, (max-width: 1200px) 33vw"  
                        src={data.image_url}
                        alt={data.title}
                        priority={true}
                        fill={true}
                    />

                </div>

                <h1 className="font-bold text-xl my-4">{data.title}</h1>
                <strong>{data.description}</strong>

                <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
                <div className="flex gap-2 flex-wrap my-4">

                    {
                        data?.platforms?.length ? 
                            (
                                data.platforms.map((item) => <Label name={item} key={item} />)
                            ) : 
                            (
                                <p>Carregando ou sem plataformas...</p>
                            )
                    }

                </div>

                <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
                <div className="flex gap-2 flex-wrap my-4">

                    {
                        data.categories.map(
                            (item)=>(
                                <Label name={item} key={item}/>
                            )
                        )
                    }

                </div>

                <p className="mt-7 mb-2"><strong>Data de lançamento: </strong>
                    {
                        data.release ?
                        `${data.release}` : `${data.data_release}`
                    }
                </p> 

                <h2 className="mt-20 font-bold text-lg  mb-2">Jogo recomendado: </h2>

                <div className="flex">

                    <div className="flex-grow"> 

                        <GameCard 
                            data={gameSorted}
                        />

                    </div>

                </div>
                
            </Container>

        </main>
    )
}
