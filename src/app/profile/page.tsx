import { Container }    from "@/components/container";
import Image            from 'next/image'
import imageProfile     from '../../../public/imgProfile.png'
import { TfiSharethis } from "react-icons/tfi";
import { GameFavs }     from "./components";


export default function Profile(){

    return(

       <main className="w-full text-aliceblue mt-40">


            <Container>

                <section 
                    className="mt-8 mb-6 flex flex-col items-center justify-between relative sm:flex-row rounded-lg"
                >

                    <div className="w-full flex items-center justify-center gap-4 text-lg flex-col sm:flex-row sm:justify-normal">
                        
                        <Image 
                        
                            src={imageProfile}
                            alt="Imagem do usuário"
                            className="rounded-full w-56 h-56 object-cover"
                        />
                        
                        <div className="flex flex-col">
                            <h1 className="font-bold text-2xl text-white ">Mustache User</h1>
                            <strong className="text-white">'Hello, I'm new here'</strong>
                        </div>

                    </div>

                    <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center px-2 py-2">

                        <button className="font-bold bg-blue-500 px-2 py-2 rounded-lg hover:bg-orange-500 hover:scale-110 transition-all duration-500 ease-in-out text-white">Settings</button>

                        <button className="font-bold bg-blue-500 px-2 py-2 rounded-lg hover:bg-orange-500 hover:scale-110 transition-all duration-500 ease-in-out"><TfiSharethis size={25} color="aliceblue"/></button>

                    </div>

                </section>

                <section className="flex flex-rap gap-4 flex-col md:flex-row">
                    
                    <div className="flex-grow flex-wrap">
                        <GameFavs />
                    </div>

                    <div className="flex-grow flex-wrap">
                        <GameFavs />
                    </div>
                    
                    <div className="flex-grow flex-wrap">
                        <GameFavs />
                    </div>

                </section>

            </Container>


       </main>
    )

}