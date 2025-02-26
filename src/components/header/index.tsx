import logo                from '../../../public/LogoIcon.png'
import Link                from 'next/link'
import Image               from 'next/image'
import { LiaGamepadSolid } from 'react-icons/lia'
import { MdOutlineGames } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";

export const Header: React.FC = () => {

    return (

        <header className="w-full h-21 bg-white px-4 py-2">

            <div className="max-w-screen-xl mx-auto px-10 flex justify-center items-center h-28 sm:justify-between">

                <nav className="flex justify-center items-center gap-4 px-4 py-4">

                    <Link href="/" className="flex flex-col justify-center items-center mr-10">

                        <Image
                            src={logo}
                            alt="Logo Mustache Arcade"
                            quality={100}
                            priority={true}
                            width={90}
                        />

                        <h1 className="text-2xl text-blue-500  font-extrabold text-shadow-lg">
                            Mustache<span className="text-orange-500">Arcade</span>
                        </h1>

                    </Link>

                    <Link href="/" className='text-black hover:text-blue-500 text-base font-bold ml-10 hover:scale-105 transition-all duration-500 ease-in-out flex justify-center items-center'>
                        Games‎‎<MdOutlineGames size={22} className='ml-1'/>

                    </Link>

                    <Link href="/profile" className='text-black  hover:text-orange-500 text-base ml-5 font-bold hover:scale-105 transition-all duration-500 ease-in-out flex justify-center items-center'>
                        Profile‎‎<BsPersonSquare size={22} className='ml-1'/>
                    </Link>

                </nav>

                <div className="hidden sm:flex justify-center items-center">

                    <Link href="/profile">
                        <LiaGamepadSolid size={40} className='text-orange-500 hover:text-blue-500 hover:scale-110 transition-all duration-500 ease-in-out' />
                    </Link>

                </div>

            </div>
        </header>
    )
}
