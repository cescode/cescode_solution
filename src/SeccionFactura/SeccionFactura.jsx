import './SeccionFactura.css'
import imagenFactura from './ImagenesFactura/Datafono.jpg'

function SeccionFactura(){
    return(
        <>
        <section className='bloque_Factura'>
            <img src={imagenFactura} alt="" />
            <div>
                <h1>Factura Electrónica</h1>
                <p>Quieres recibir tu factura electrónica de tus consumos en terpel o altoque.</p>
                <button>Conoce más</button>
            </div>
        </section>
        </>
    )
} export default SeccionFactura