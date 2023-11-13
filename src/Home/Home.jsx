import './Home.css'
import { Menu } from '../Menu/Menu'
import { Banner } from '../Banner/Banner'

export function Home() {
    return (
        <>
            <header>
                <Menu></Menu>
                <Banner></Banner>
            </header> 
        </>
    )
}