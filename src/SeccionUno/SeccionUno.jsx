import './SeccionUno.css'
import imagenTerpel from './Imagenes/terpel.jpeg'
import imagenGazel from './Imagenes/gazel.jpg'
import imagenAltoque from './Imagenes/altoque.jpg'

function SeccionUno(){
    return(
        <>
        <section className="bloque_Servicios">
            <h1>Nuestros Servicios</h1>
            <section className="carrusel">
            <div className="bloque_Gazel">
                <img className='imagenGazel' src={imagenGazel} alt="" />
                <h1>Gazel</h1>
                <button>Conocer más</button>
            </div>
            <div className="bloque_Terpel">
                <img className='imagenTerpel' src={imagenTerpel} alt="" />
                <h1>Terpel</h1>
                <button>Conocer más</button>
            </div>
            <div className="bloque_Altoque">
                <img className='imagenAltoque' src={imagenAltoque} alt="" />
                <h1>Altoque</h1>
                <button>Conocer más</button>
            </div>
            </section>


        </section>
        
        </>
    )
}
export default SeccionUno