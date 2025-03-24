'use client'

import { Container } from "@/components/container"
import { GameFavs }  from "../cards"
import { useEffect, useState } from "react"

export const SectionGameFav : React.FC = ()=>{

    const STORAGE_KEY = "🎮-FavsMuArcade-🎮";

    // Estado inicial carregando do localStorage
    const [games, setGames] = useState<string[]>(() => {
        if (typeof window !== "undefined") {
            const storageGames = localStorage.getItem(STORAGE_KEY);
            return storageGames ? JSON.parse(storageGames) : ["", "", ""];
        }
        return ["", "", ""];
    });

    // Atualiza o localStorage sempre que `games` mudar
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
        console.log(`Salvo no localStorage: ${JSON.stringify(games)}`);
    }, [games]);

    const updateGameFav = (index: number, newGame: string) => {
        setGames((prevGames) => {
            const updatedGames = [...prevGames];
            updatedGames[index] = newGame;
            return updatedGames;
        });
    };

    return(
        <Container>

            <section className="flex flex-rap gap-5 flex-col md:flex-row">
                    
                {
                    games.map(
                        (game, index)=>(
                            <div key={index} className="flex-grow flex-wrap">
                                
                                <GameFavs 
                                    index={index}
                                    game={game}
                                    updateGameFav={updateGameFav}
                                />

                            </div>
                        )
                    )
                }

            </section>

        </Container>
    )
}