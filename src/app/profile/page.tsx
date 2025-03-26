import { Container }      from "@/components/container";
import { SectionGameFav } from "./components/SectionGameFav";
import { HeaderProfile }  from './components/HeaderProfile'


export default function Profile(){

    return(

       <main className="hs:w-full text-aliceblue mt-40 xs:h-1/6  h-0">


            <Container>

                <HeaderProfile />

                <SectionGameFav />

            </Container>


       </main>
    )

}