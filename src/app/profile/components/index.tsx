'use client'

import { useState }      from "react";
import { MdEditSquare }  from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";


export const GameFavs: React.FC = ()=>{

    const [gameFav,     setGameFav] = useState<string>('')
    const [gameName,   setGameName] = useState<string>('')
    const [showInput, setShowInput] = useState<boolean>(false)

    const handleButton = ()=>{

        setShowInput(!showInput)
        
        if(gameFav !== ''){

            setGameName(gameFav)
        }

        setGameFav('')
        
    }

    return(

        <div className="w-auto bg-blue-500 p-7 h-44 text-white flex justify-between flex-col rounded-lg">
            
            {
                showInput ?
                (   
                    <div className="flex items-center justify-center gap-3">

                        <input 
                            type="text" 
                            className=" w-full h-8 text-black px-2 font-bold rounded-lg"
                            value={gameFav}
                            onChange={ (e) => setGameFav(e.target.value) }
                        />

                        <button 
                             className=" hover:text-orange-500 hover:scale-110 transition-all duration-200 ease-in-out"
                             onClick={handleButton}
                        >
                            {
                                
                                gameFav.length >= 4 ?
                                <FaCheckCircle size={22} /> : <IoCloseCircle size={22}/>
                            }
                        </button>

                        

                    </div>
                ):
                (
                    <button 
                        className="self-start hover:text-orange-500 hover:scale-110 transition-all duration-200 ease-in-out"
                        onClick={handleButton}
                    >
                        <MdEditSquare size={24}/>
                    </button>
                )
            }
            
            {
                gameName && gameName.length > 4 ?
                (
                    <div>
                        <span>Favorite game:</span>
                        <p>{gameName}</p>
                    </div>
                ):
                (

                    <p className="font-bold">Add your favorite game</p>
                )
            }


        </div>
    )
}