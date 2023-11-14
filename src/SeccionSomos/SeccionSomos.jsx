import imagenSomos from './ImagenesSomos/somosTerpel.jpg'
import './SeccionSomos.css'

function SeccionSomos(){
    return(
        <>
        <article className='bloque_Somos'>
            
            <section className='base_Somos'>
                <img src={imagenSomos} alt="" />
                <div>
                <aside>
                    <h1>¡Somos Terpel!</h1>
                    <p>Un equipo formado con confianza, integridad y respeto para entregar experiencias memorables a todos nuestros clientes.</p>
                </aside>
                </div>
                
            </section>
            <button> Conoce más </button>
        </article>

        </>
    )
}
export default SeccionSomos