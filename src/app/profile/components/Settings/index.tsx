'use client'

import { useState, useEffect } from "react"
import Image         from 'next/image'
import { Container } from "@/components/container"
import templatePhoto from '../../../../../public/imgProfile.png'
import loading       from '../../../../../public/loading.gif'

export const Settings: React.FC = () => {

    const [nameUser, setNameUser] = useState<string>('')
    const [imageUser, setImageUser] = useState<string>('') // Armazena a URL da imagem em base64
    const [sloganUser, setSloganUser] = useState<string>('')
    const [isSaving, setIsSaving] = useState<boolean>(false) 
    const [isLoading, setIsLoading] = useState<boolean>(false) 

    // Recupera os dados do usuário ao carregar a página
    useEffect(() => {
        const storedProfileData = JSON.parse(localStorage.getItem('userProfile') || 'null')
        if (storedProfileData && storedProfileData.image) {
            setImageUser(storedProfileData.image) // Usa a string base64 salva
            setNameUser(storedProfileData.name)
            setSloganUser(storedProfileData.slogan)
        }
    }, [])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            const reader = new FileReader()

            reader.onloadend = () => {
                const base64Image = reader.result as string
                setImageUser(base64Image) // Converte para base64
            }

            reader.readAsDataURL(file)
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
            localStorage.setItem('userProfile', JSON.stringify(userData)) // Salva os dados no localStorage
            window.location.href = '/profile' // Redireciona para o perfil
        }, 2500)
    }

    return (
        <Container>

<main className="mt-8 mb-6 flex flex-col sm:flex-row items-center justify-around relative rounded-lg">
                
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
                            src={templatePhoto} 
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
                        onChange={(e) => setNameUser(e.target.value)}
                    />
                    
                    <input 
                        className="mb-10 w-80 h-8 border rounded-lg text-center font-bold"
                        type="text" 
                        value={sloganUser}
                        placeholder="And here's your new slogan..."
                        onChange={(e) => setSloganUser(e.target.value)}
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
