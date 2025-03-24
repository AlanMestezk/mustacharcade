'use client'

import { useState }  from "react"
import Image         from 'next/image'
import { Container } from "@/components/container"
import templatePhoto from '../../../../../public/imgProfile.png'
import loading       from '../../../../../public/loading.gif'

interface SettingsProps {
    name  : string
    image : string 
    slogan: string
}

export const Settings: React.FC = ()=>{

    const [nameUser,       setNameUser] = useState<string>('')
    const [imageUser,     setImageUser] = useState<string>('') // Armazena a URL da imagem
    const [sloganUser,   setSloganUser] = useState<string>('')
    const [isSaving,       setIsSaving] = useState<boolean>(false) 
    const [isLoading,     setIsLoading] = useState<boolean>(false) 

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.files && e.target.files[0]) {

            const file = e.target.files[0]
            const imageUrl = URL.createObjectURL(file) // Converte o arquivo para URL

            setImageUser(imageUrl)
        }
    }

    const handleSaveUserData = () => {

        setIsLoading(true)  
        setIsSaving(true)  

        const userData = {
            name: nameUser,
            image: imageUser,
            slogan: sloganUser
        }

        
        setTimeout(() => {
            localStorage.setItem('userProfile', JSON.stringify(userData))
    

            // Redirecionar para a página de HeaderProfile
            window.location.href = '/profile'  
        }, 2500) 
    }


    return(
        <Container>
            
            <main className="mt-8 mb-6 flex items-center justify-around relative sm:flex-row rounded-lg">
                
                <div className="flex flex-col justify-center items-center">

                    {
                        imageUser ? 
                        <Image 
                            src={imageUser} 
                            alt="User" 
                            width={150} 
                            height={100} 
                            className="rounded-full w-56 h-56 object-cover mb-4"
                        /> : 
                        <Image 
                            src={imageUser ? imageUser : templatePhoto} 
                            alt="User" 
                            width={150} 
                            height={100} 
                            className="rounded-full w-56 h-56 object-cover mb-4 border-style: solid"
                        />
                    }

                    <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-orange-500 hover:scale-110 transition-all duration-500 ease-in-out font-bold">
                        Choose image
                        <input 
                            type="file" 
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </label>
                </div>
                
                <div className="flex flex-col justify-center items-center p-6 py-3">
                    <input 
                        className="mb-10 w-80 h-8 border rounded-lg text-center font-bold"
                        type="text" 
                        value={nameUser}
                        placeholder="Enter your new name here..."
                        onChange={(e)=> setNameUser(e.target.value)}
                    />
                    
                    <input 
                        className="mb-10 w-80 h-8 border rounded-lg text-center font-bold"
                        type="text" 
                        value={sloganUser}
                        placeholder="And here's your new slogan..."
                        onChange={(e)=>setSloganUser(e.target.value)}
                    />
                    
                    {
                    isLoading ? 
                        (
                            <Image 
                                src={loading}
                                alt="Loading"
                                width={50}
                                height={50}
                            />
                        ) : 
                        (
                            <button
                                className="font-bold bg-blue-500 px-2 py-2 rounded-lg hover:bg-orange-500 hover:scale-110 transition-all duration-500 ease-in-out text-white"
                                onClick={handleSaveUserData}
                                disabled={isSaving}  
                            >
                                    {isSaving ? 'Salvando...' : 'Salvar'} 
                            </button>
                        )
                    }

                </div>

            </main>
        </Container>
    )
}
