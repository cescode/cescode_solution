import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
    <div>
        <div>
            <h3>Terpel</h3>
            <p>líder en distribución</p>
            
        </div>
        <div>
            <h3>Contacto</h3>
            <p>PBX (571) 326 78 78 FAX 376 97</p>
            <p>Carrera 7 No. 75 - 51</p>
            <p>Bogotá - Colombia.</p>
        </div>
        <div>
            <h3>Redes Sociales</h3>
            <ul>
                <li><a href="/acerca-de">Facebook</a></li>
                <li><a href="/productos">Instagram</a></li>
                <li><a href="/contacto">Twitter</a></li>
            </ul>
        </div>
    </div>
    <div className="footer-bottom">
        <p>© 2023 Tu Compañía. Todos los derechos reservados.</p>
    </div>
</footer>
);
};

export default Footer