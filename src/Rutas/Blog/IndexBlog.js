import {Link} from 'react-router-dom';
import { useState } from 'react';

import HeaderPortafolio from '../RutasIndividuales/Componentes/HeaderPortafolio';
import ContactoScreen from '../RutasIndividuales/Componentes/ContactoScreen';
import Portada from '../RutasIndividuales/Componentes/Portada';
import Contenedor from '../../Componentes/Contenedor';
import Carta from '../../Componentes/Carta';
import Titulo from './Componentes/Titulo';
const IndexBlog = () =>{
    const [mostrarContactoScreen, setMostrarContactoScreen] = useState(false)
    const toggleContactoScreen=()=>{
        setMostrarContactoScreen(!mostrarContactoScreen);
    }
    return (
        <div>
            {mostrarContactoScreen ? <ContactoScreen toggleContacto={toggleContactoScreen}/>:null}
            <HeaderPortafolio toggleContacto={toggleContactoScreen}/>
            <Portada titulo={'Bienvenido a mi blog'} subtitulo={'By Raúl Acosta'} imagen='1_q6soTOf9P8Igl3sxDximM0ejf61Ubdb'/>
            <Titulo>Visita mis artículos de tecnología y conocimientos adquiridos en mi experiencia, estudio y análisis.</Titulo>
            <Contenedor>
                <Carta imagen={'1_q6soTOf9P8Igl3sxDximM0ejf61Ubdb'} titulo={'Salarios de desarrollador y como pedir un aumento'} informacion={'Descubre como incrementar tu calidad de vida y el valor que recibes a cambio de tus servicios'} tags={''} link={'/blog/salariodesarrollador'} linkName={'Ir al artículo'}/>
            </Contenedor>
        </div>
    )
}
export default IndexBlog;