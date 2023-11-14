import './Home.css'
import { Menu } from '../Menu/Menu'
import Bannerppal from '../Bannerppal/Bannerppal'
import Footer from '../Footer/Footer'


export function Home() {
    return (
        <>
            <header>
                <Menu></Menu>
            </header>


            <Bannerppal />

            <Footer />

        </>
    )
}