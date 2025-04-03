'use client'

import { Container }           from '@/app/components/container'
import Image                   from 'next/image'
import { useState, useEffect } from 'react'
import { Settings }            from '../Settings'

export const HeaderProfile: React.FC = ()=>{

    const [butonSettings, setButtonSettings] = useState<boolean>(true)
    const [userProfile,      setUserProfile] = useState<any>(null)

    useEffect(() => {
        // Carregar dados do localStorage
        const storedData = localStorage.getItem('userProfile')
        if (storedData) {
            setUserProfile(JSON.parse(storedData))
        }
    }, [])

    const handleSettings = ()=>{
        setButtonSettings(!butonSettings)
    }

    return(

        <main className='-mt-32 xs:mt-22 bg-custom-gradient-blue rounded-lg'>
            <Container>

                {
                    butonSettings ? (
                        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative sm:flex-row rounded-lg">

                            <div className="w-full flex items-center justify-center gap-4 text-lg flex-col sm:flex-row sm:justify-normal">
                                
                                <Image 
                                    src={userProfile?.image || '/imgProfile.png'}
                                    alt="Imagem do usuário"
                                    className="rounded-full xs:w-56 xs:h-56 w-36 h-36 object-cover border-2 border-x-violet-500"
                                    width={150} 
                                    height={100} 
                                />
                                                    
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="font-bold text-2xl text-white ">{userProfile?.name || 'Mustache User'}</h1>
                                    <strong className="text-white">{userProfile?.slogan || "'Hello, I'm new here'"}</strong>
                                </div>

                            </div>

                            <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center px-2 py-2">

                                <button 
                                    className="font-bold bg-blue-500 px-2 py-2 rounded-lg hover:bg-orange-500 hover:scale-110 transition-all duration-500 ease-in-out text-white"
                                    onClick={handleSettings}
                                >
                                    Settings
                                </button>

                            </div>

                        </section>
                    ) : (
                        <section className="mb-10 flex justify-center items-center flex-col">

                            <Settings />
                            
                        </section>
                    )
                }

            </Container>
        </main>
    )
}
