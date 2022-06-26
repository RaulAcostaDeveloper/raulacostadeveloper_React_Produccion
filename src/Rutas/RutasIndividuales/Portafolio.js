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
            <Portada titulo={'Raúl Acosta'} subtitulo={'Desarrollador Front End'} imagen={'1NtoU3RyOG_L2SjkXeJhvpWj59BcdrN5p'}/>
            <SobreMi/>
            <MisCertificados/>
            <MisDesarrollos/>
        </div>
    )
}
export default Portafolio;