import './Menu.css'
import Logo from '../assets/logo2.png'
export function Menu() {
    return (
        <>
          
        <nav className="navUno">
            <ul>
              <li><a href="#quienes-somos">¿Quiénes somos?</a></li>
              <li><a href="#sostenibilidad">Sostenibilidad</a></li>
              <li><a href="#trabajanosotros">Trabaja con nosotros</a></li>
              <li><a href="#manejo-de-datos-personales">Manejo de datos personales</a></li>
              <li><a href="#reportes-confidenciales">Reportes confidenciales</a></li>
              <li><a href="#creg">CREG 024</a></li>
              <li><a href="#estaciones">Encuéntranos<i class='bx bx-map'></i></a></li>
              <li class="busqueda"><i class='bx bx-search'></i></li>
            </ul>
            
          </nav>
          
    
      
        
          <nav className="navDos" >
            <ul>	
                <img  src={Logo} width="100px" height="100px" />
    
                   <li><a href="#empresas">Empresas</a>
                    
                   </li>
              
                
                <li ><a href="#movilidad-y-energias">Nueva movilidad y Energías</a></li> 
                <li><a href="#programas">Programas</a> </li>
                <li ><a href="#estaciones-de-servicio">Estaciones de Servicio</a>
                  
                </li>
               
                <li ><a href="#lubricantes" >Lubricantes</a></li> 
                <li><a href="#proveedores">Proveedores</a></li> 
                <li><a href="#accionistas-e-inversionistas">Accionistas e Inversionistas</a>
                         
                     
                </li>
        </ul>
    
                   
       </nav>
       

        </>
    )
}