import Link                     from "next/link";
import Image                    from 'next/image'
import { GameProps }            from "@/utils/types/game";
import { BsArrowUpRightSquare } from "react-icons/bs";

interface GameCardProps{
    data: GameProps
}

export const GameCard: React.FC<GameCardProps> = ({data})=>{

    return(

        <Link href={`/game/${data.id}`}>
        
            <section className="w-full bg-slate-950 rounded-lg roudend-lg  mb-6">
                
                <div className="relative w-full h-56 hover:scale-105 transition-all duration-500 ease-in-out">
                    
                    <Image
                        src={data.image_url}
                        alt={data.title}
                        fill={true}
                        quality={100}
                        sizes="(max-width: 900px) 100vw, (max-width: 1200px) 33vw"
                        className="rounded-lg object-cover"
                    />

                </div>

                <div className="flex items-center mt-4 justify-between p-3 hover:scale-105 transition-all duration-500 ease-in-out">

                    <strong className="text-sm font-bold px-2 text-white text-ellipsis truncate whitespace-nowrap overflow-hidden">{data.title}</strong><BsArrowUpRightSquare size={25} color="white"/>

                </div>

            </section>
        </Link>
    )
}