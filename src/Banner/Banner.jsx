import './Banner.css'
import React from 'react'

const Banner = () => {
    return (
        <div className="banner">
            <div className="gazel">
                <img src="" alt="Imagen 1" />
                <h2>Gazel</h2>
                <p>
                    El GNV es un combustible para uso vehicular económico y ambientalmente
                    limpio, es considerado una alternativa sustentable para la sustitución de
                    combustibles líquidos.
                </p>
            </div>
            <div className="voltex">
                <img src="" alt="Imagen 2" />
                <h2>Voltex</h2>
                <p>
                    La red de electrolineras que permite a los colombianos recorrer Colombia
                    en sus vehículos electricos
                </p>
            </div>
            <div className="mobil">
                <img src="" alt="Imagen 3" />
                <h2>Mobil</h2>
                <p>
                    Todos nuestros lubricantes son desarrollados a partir de investigación
                    cientifica y tecnologia avanzada. Asi creamos soluciones especificas para
                    cada tipo de motor.
                </p>
            </div>
            <div className="altoque">
                <img src="" alt="Imagen 4" />
                <h2>Altoque</h2>
                <p>
                    Somos tu aliado en el camino, siendo una red de mas de 120 tiendas que
                    cuentan con un servicio ágil y moderno que acompala a las personas que se
                    movilizan por la ciudades y carreteras del pais.
                </p>
            </div>
        </div>

    )
}

export default Banner