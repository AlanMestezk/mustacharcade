import logo                from '../../../public/LogoIcon.png'
import Link                from 'next/link'
import Image               from 'next/image'
import { LiaGamepadSolid } from 'react-icons/lia'

export const Header: React.FC = () => {

    return (

        <header className="w-full h-21 bg-custom-blue-dark px-4 py-2">

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

                        <h1 className="text-2xl text-blue-400 font-extrabold text-shadow-lg">
                            Mustache<span className="text-orange-500">Arcade</span>
                        </h1>

                    </Link>

                    <Link href="/" className='text-white font-bold ml-10'>
                        Games
                    </Link>

                    <Link href="/profile" className='text-white font-bold'>
                        Profile
                    </Link>

                </nav>

                <div className="hidden sm:flex justify-center items-center">

                    <Link href="/profile">
                        <LiaGamepadSolid size={35} className='text-orange-500' />
                    </Link>

                </div>

            </div>
        </header>
    )
}
