'use client'

import { ImSearch }            from "react-icons/im";
import { useRouter }           from "next/navigation";
import { FormEvent, useState } from "react";

interface InputProps{
    placeholder:string;
}

export const Input: React.FC<InputProps> = ({placeholder})=>{

    const [input, setInput]     = useState<string>('');
    const [message, setMessage] = useState<boolean>(false);

    const router = useRouter();

    const handleSearch = (event: FormEvent) => {

        event.preventDefault();
    
        const query = input.trim();
        console.log("URL gerada para a busca:", `/game/search/${encodeURIComponent(query)}`);
    
        if (query === "") {
            setMessage(true);
        } else {
            setMessage(false);
            router.push(`/game/search/${encodeURIComponent(query)}`);
        }

    };

    return(

        <>

            <form  
                onSubmit={handleSearch} 
                className="w-full bg-slate-950 my-5 flex gap-2 items-center justify-between rounded-mg p-2"
            >

                <input 
                    type="text" 
                    placeholder={placeholder}
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    className="bg-slate-950 outline-none w-11/12 text-white text-bold text-center"
                />

                <button type="submit"><ImSearch size={24} className="text-orange-500 hover:text-blue-500 hover:scale-110 transition-all duration-500 ease-in-out"/></button>

            </form>
        
            {   
                message && 
                    <div className="flex justify-center items-center mb-2 bg-red-300 ">
                        <strong className="text-red-600 text-sm ">First type the desired game...</strong>
                    </div>
            }
        </>

        

    )
}