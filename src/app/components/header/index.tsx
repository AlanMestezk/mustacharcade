'use client'

import { useState, useEffect } from 'react'
import logo                    from '../../../../public/LogoIcon.png'
import Link                    from 'next/link'
import Image                   from 'next/image'
import { MdOutlineGames }      from "react-icons/md";
import { BsPersonSquare }      from "react-icons/bs";
import { LiaGamepadSolid }     from 'react-icons/lia'

export const Header: React.FC = () => {
    const [profileImage, setProfileImage] = useState<string | null>(null);

    useEffect(() => {
        // Recuperando os dados de perfil armazenados no localStorage
        const storedProfileData = JSON.parse(localStorage.getItem('userProfile') || 'null');
        
        // Verifique se a imagem existe no localStorage e se é válida
        if (storedProfileData && storedProfileData.image) {
            setProfileImage(storedProfileData.image); // Atualiza o estado com a URL da imagem
        }
    }, []); 

    return (

         <header className="w-full min-h-[70px] bg-slate-950 px-4 py-2">

            <div className="max-w-screen-xl mx-auto px-6 flex flex-wrap justify-center items-center sm:justify-between">

                <nav className="flex flex-wrap xs:flex-row flex-col justify-center xs:justify-between items-center gap-3 px-2 py-3 w-full xs:w-auto">

                    <Link href="/" className="flex flex-col justify-center items-center sm:mr-8">

                        <Image
                            src={logo}
                            alt="Logo Mustache Arcade"
                            quality={100}
                            priority={true}
                            width={60}
                            className="sm:w-[90px] w-14"
                        />

                        <h1 className="sm:text-2xl text-sm text-blue-500 font-extrabold text-shadow-lg">
                            Mustache<span className="text-orange-500">Arcade</span>
                        </h1>

                    </Link>

                    <div className='flex justify-between items-center ml-50'>

                        <Link href="/" className="text-sm sm:text-base text-white hover:text-blue-500 font-bold sm:ml-8 hover:scale-105 transition-all duration-500 ease-in-out flex justify-center items-center">
                            Games<MdOutlineGames size={16} className="ml-1 sm:size-22" />
                        </Link>

                        <Link href="/profile" className="text-sm ml-10 sm:text-base text-white hover:text-orange-500 font-bold sm:ml-4 hover:scale-105 transition-all duration-500 ease-in-out flex justify-center items-center">
                            Profile<BsPersonSquare size={16} className="ml-1 sm:size-22" />
                        </Link>

                    </div>


                </nav>

                <div className="hidden sm:flex justify-center items-center">

                    {
                        profileImage ? (

                            <Image
                                src={profileImage}
                                alt="User Profile"
                                width={100}
                                height={100}
                                className="rounded-full w-16 h-16 object-cover hover:scale-110 transition-all duration-500 ease-in-out "
                            />

                        ) : 
                        (
                            <Link href="/profile" className="text-[24px] sm:text-[40px]">
                                <LiaGamepadSolid className="text-orange-500 hover:text-blue-500 hover:scale-110 transition-all duration-500 ease-in-out" />
                            </Link>

                        )
                    }

                </div>
            </div>
        </header>
    );
}
