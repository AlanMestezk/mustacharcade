
import logo                from '../../../public/LogoIcon.png'
import Link                from 'next/link'
import Image               from 'next/image'
import { MdOutlineGames }  from "react-icons/md";
import { BsPersonSquare }  from "react-icons/bs";
import { LiaGamepadSolid } from 'react-icons/lia'

export const Header: React.FC = () => {

    return (

        <header className="w-full min-h-[70px] bg-slate-950 px-4 py-2">

            <div className="max-w-screen-xl mx-auto px-6 flex flex-wrap justify-center items-center sm:justify-between">
        
                <nav className="flex flex-wrap justify-center items-center gap-3 px-2 py-3 w-full sm:w-auto">
        
                    <Link href="/" className="flex flex-col justify-center items-center sm:mr-8">
        
                        <Image
                            src={logo}
                            alt="Logo Mustache Arcade"
                            quality={100}
                            priority={true}
                            width={60} // Reduzido apenas para celulares
                            className="sm:w-[90px]" // Em telas maiores, mantém 90px
                        />
        
                        <h1 className="text-lg sm:text-2xl text-blue-500 font-extrabold text-shadow-lg">
                            Mustache<span className="text-orange-500">Arcade</span>
                        </h1>
        
                    </Link>
        
                    <Link href="/" className="text-sm sm:text-base text-white hover:text-blue-500 font-bold sm:ml-8 hover:scale-105 transition-all duration-500 ease-in-out flex justify-center items-center">
                        Games<MdOutlineGames size={16} className="ml-1 sm:size-22" /> {/* Ícone menor no mobile */}
                    </Link>
        
                    <Link href="/profile" className="text-sm sm:text-base text-white hover:text-orange-500 font-bold sm:ml-4 hover:scale-105 transition-all duration-500 ease-in-out flex justify-center items-center">
                        Profile<BsPersonSquare size={16} className="ml-1 sm:size-22" /> {/* Ícone menor no mobile */}
                    </Link>
        
                </nav>
        
                <div className="hidden sm:flex justify-center items-center">
                    <Link href="/profile" className="text-[24px] sm:text-[40px]">
                        <LiaGamepadSolid className="text-orange-500 hover:text-blue-500 hover:scale-110 transition-all duration-500 ease-in-out" />
                    </Link>
                </div>
            </div>
        
        </header>
    


    )
}
