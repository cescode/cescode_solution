import imagenDatoTerpel from './ImagenesDatos/datosTerpel.png'
import imagenDatoVoltex from './ImagenesDatos/datosVoltex.jpg'
import imagenDatoAltoque from './ImagenesDatos/datosAltoque.jpg'
import './SeccionDatos.css'

function SeccionDatos(){
    return(
        <>
        <div className="bloque_Datos">
            <h1>Datos Relevantes</h1>
            <section className='card_Datos'>
            <section>
                <img src={imagenDatoTerpel} alt="" />
                <p>+2.000 Estaciones Terpel</p>
            </section>
            <section>
                <img src={imagenDatoVoltex} alt="" />
                <p>+15 Electolineras</p>
            </section> <section>
                <img src={imagenDatoAltoque} alt="" />
                <p>+120 Tiendas Altoque</p>
            </section>
            </section>
        </div>
        </>
    )
}
export default SeccionDatos