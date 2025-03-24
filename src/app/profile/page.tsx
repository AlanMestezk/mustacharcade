import { Container }    from "@/components/container";
import { SectionGameFav } from "./components/gamefav";
import { HeaderProfile } from './components/HeaderProfile'


export default function Profile(){

    return(

       <main className="w-full text-aliceblue mt-40">


            <Container>

                <HeaderProfile />

                <SectionGameFav />

            </Container>


       </main>
    )

}