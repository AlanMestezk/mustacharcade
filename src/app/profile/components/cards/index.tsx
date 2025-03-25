'use client'

import { useState }      from "react";
import { MdEditSquare }  from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

interface GameFavProps {

    game : string
    index: number

    updateGameFav: (index: number, newGame: string) => void;
}

export const Cards: React.FC<GameFavProps> = ({ index, game, updateGameFav }) => {

    const [gameFav,     setGameFav] = useState<string>(game);
    const [showInput, setShowInput] = useState<boolean>(false);

    const handleButton = () => {

        if (gameFav.trim().length >= 4) {

            updateGameFav(index, gameFav);
            setShowInput(false);

        }

        setShowInput(false)
    };

    return (

        <div className="w-auto mb-90 h-24 bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 p-2 xs:p-10 xs:h-44 text-white flex justify-between flex-col rounded-lg">

            {showInput ? 
                (
                    <div className="flex items-center justify-center gap-3">

                        <input
                            type="text"
                            className="w-full h-8 text-black px-2 font-bold rounded-lg"
                            value={gameFav}
                            onChange={(e) => setGameFav(e.target.value)}
                        />

                        <button
                            className="hover:text-orange-500 hover:scale-110 transition-all duration-200 ease-in-out"
                            onClick={handleButton}
                        >

                         {gameFav.length >= 4 ? <FaCheckCircle size={22} /> : <IoCloseCircle size={22} />}

                        </button>
                    </div>
                ) : 
                (
                    <button
                        className="self-start hover:text-orange-500 hover:scale-110 transition-all duration-200 ease-in-out"
                        onClick={() => setShowInput(true)}
                    >
                        <MdEditSquare size={24} />
                    </button>
                )
            }
            {
                game && game.length >= 4 ? 
                    (
                        <div className="flex flex-col justify-center items-center xs:mt-1 -mt-2">
                            <strong>Favorite game:</strong>
                            <strong className="xs:text-2xl text-base">{game}</strong>
                        </div>
                    ) : (
                        <p className="font-bold">Add your favorite game</p>
                    )
            }
        </div>
    );
};
