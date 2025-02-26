'use client'

import { ImSearch }            from "react-icons/im";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface InputProps{
    placeholder:string;
}

export const Input: React.FC<InputProps> = ({placeholder})=>{

    const[input,     setInput] = useState<string>('')
    const[message, setMessage] = useState<boolean>(false)

    const router = useRouter()

    const handleSearch=(event: FormEvent)=>{

        event.preventDefault();

        if(input === ""){
            
            setMessage(true)
        }else{

            router.push(`game/search/${input}`)
        }


    }

    return(

        <>

            <form  
                onSubmit={handleSearch} 
                className="w-full bg-cyan-100  my-5 flex gap-2 items-center justify-between rounded-mg p-2"
            >

                <input 
                    type="text" 
                    placeholder={placeholder}
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    className="bg-cyan-100 outline-none w-11/12 "
                />

                <button type="submit"><ImSearch size={24} className="text-orange-500 hover:text-blue-500 hover:scale-110 transition-all duration-500 ease-in-out"/></button>

            </form>
        
            {   
                message && 
                <div className="flex justify-center items-center ">
                    <strong className="text-red-600 text-sm ">Primeiro digite o jogo desejado...</strong>
                </div>
            }
        </>

        

    )
}