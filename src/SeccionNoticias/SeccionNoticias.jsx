import './SeccionNoticias.css'
import imagenNoticia from './ImagenesNoticias/noticia-altoque.jpg'

function SeccionNoticias(){
    return(
        <>
        <article className='bloque_Noticias'>
            <h1>Noticias</h1>
            <section className='carrusel_Noticas'>
                <img src={imagenNoticia} alt="" />
                <div>
                <aside>
                    <h1>¡Terpel Revoluciona el Sector con Innovadores Prodoctos en sus Gasolineras!</h1>
                    <p>En un emocionante anuncio, Terpel ha presentado una nueva gama de productos que prometen transformar la experiencia en sus estaciones de servicio. Desde combustibles de última ganeración hasta servicios adicionales, la empresa busca elevar los estandares en la industria.</p>
                </aside>
                </div>
                
            </section>
            <button> Conoce más </button>
        </article>

        </>
    )
}
export default SeccionNoticias