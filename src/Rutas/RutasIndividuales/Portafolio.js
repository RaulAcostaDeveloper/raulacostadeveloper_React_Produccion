import MisCertificados from './Componentes/MisCertificados';
import MisDesarrollos from './Componentes/MisDesarrollos';
import HeaderPortafolio from './Componentes/HeaderPortafolio';
import ContactoScreen from './Componentes/ContactoScreen';
import Portada from './Componentes/Portada';
import SobreMi from './Componentes/SobreMi';
import { useState } from 'react';
const Portafolio = ()=>{
    const [mostrarContactoScreen, setMostrarContactoScreen] = useState(false)
    const toggleContactoScreen=()=>{
        setMostrarContactoScreen(!mostrarContactoScreen);
    }
    return (
        <div>
            {mostrarContactoScreen ? <ContactoScreen toggleContacto={toggleContactoScreen}/>:null}
            <HeaderPortafolio toggleContacto={toggleContactoScreen}/>
            <Portada/>
            <SobreMi/>
            <MisCertificados/>
            <MisDesarrollos/>
        </div>
    )
}
export default Portafolio;