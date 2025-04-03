import Image               from 'next/image'
import logoMustacheCompany from '../../../../public/MustacheCompany.png'
import { FaLinkedin }      from "react-icons/fa";
import { FaGithub }        from "react-icons/fa";
import { SlMustache }      from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail }         from "react-icons/si";
import Link                from 'next/link';

export const Footer: React.FC = () => {

    const socialMideas = [
        { id: 1, name: FaLinkedin,      link: 'https://www.linkedin.com/in/alan-mestezk/' },
        { id: 2, name: FaGithub,        link: 'https://github.com/AlanMestezk' },
        { id: 3, name: AiFillInstagram, link: 'https://www.instagram.com/alanmestezk/' },
        { id: 4, name: SiGmail,         link: 'https://criarmeulink.com.br/u/1742994501' }
    ]

    return (

        <footer className='flex flex-col '> 

            <div className="w-full flex items-center justify-center bg-slate-950 p-3 px-4 py-2">

                <div className="w-full max-w-screen-xl flex-col mx-auto px-6 flex-wrap justify-center items-center sm:justify-between">

                    <div className="flex flex-col xs:flex-col justify-center items-center gap-3 px-2 py-3 w-full">

                        <h1 className="sm:text-2xl text-sm text-blue-500 font-extrabold text-shadow-lg text-center">
                            Mustache<span className="text-slate-500">Arcade</span>
                            <strong> - 20<span className="text-slate-500">25</span></strong>
                        </h1>

                        <div className='flex flex-col justify-center items-center'>

                            <strong className='flex justify-center items-center text-slate-500'><SlMustache />‎‎ Alan Mestezk‎ ‎<SlMustache /></strong>
                            <strong className='text-blue-500 s:text-2xl text-sm'>© 2025 Mustache Company.</strong>

                        </div>

                    </div>

                    <nav className="mt-5 max-w-screen-xl mx-auto px-6 xs:flex-row flex-col flex w-full justify-between items-center sm:justify-between">
                       
                        <div className="flex-shrink-0">
                            <Image
                                src={logoMustacheCompany}
                                alt="Logo Mustache Company"
                                width={80}
                                quality={100}
                                className="sm:w-[90px] xs:w-14 w-20 object-cover rounded-lg border-4 border-white"
                            />
                        </div>

                        <div className="flex-shrink-0 ">

                            <strong className='text-slate-500'>Contact us through our channels:</strong>

                            <div className='mt-2 flex justify-around items-center'>

                                {
                                    socialMideas.map(

                                        (media) => {

                                            const Icon = media.name; // Atribuindo o componente do ícone à variável Icon

                                            return (
                                                <Link
                                                    key={media.id}
                                                    href={media.link}
                                                    target="_blank"
                                                >
                                                    <Icon size={25} className='text-slate-500 text- hover:text-blue-500 hover:scale-90 transition-all duration-500 ease-in-out' />
                                                </Link>

                                            );
                                        }
                                    )

                                }

                            </div>

                        </div>

                    </nav>

                    <div className='flex justify-center items-center mt-7'>

                        <strong className='text-center s:text-2xl text-sm text-blue-500'>
                            This website is the work of a passionate technology enthusiast and dedicated student, crafted with care and a love for innovation. It reflects a journey of continuous learning and growth, driven by a deep curiosity for the ever-evolving world of technology.
                        </strong>

                    </div>

                </div>

            </div>

        </footer>
    )
}
