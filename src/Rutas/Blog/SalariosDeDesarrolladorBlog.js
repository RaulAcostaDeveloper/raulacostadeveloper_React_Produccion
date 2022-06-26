import { useState } from 'react';

import HeaderPortafolio from '../RutasIndividuales/Componentes/HeaderPortafolio';
import ContactoScreen from '../RutasIndividuales/Componentes/ContactoScreen';
import Portada from '../RutasIndividuales/Componentes/Portada';

import Titulo from './Componentes/Titulo';
import Imagen from './Componentes/Imagen';
import Parrafo from './Componentes/Parrafo';
const SalariosDeDesarrollador =()=>{
    const [mostrarContactoScreen, setMostrarContactoScreen] = useState(false)
    const toggleContactoScreen=()=>{
        setMostrarContactoScreen(!mostrarContactoScreen);
    }
    return (
        <div>
            {mostrarContactoScreen ? <ContactoScreen toggleContacto={toggleContactoScreen}/>:null}
            <HeaderPortafolio toggleContacto={toggleContactoScreen}/>
            <Portada titulo={'Salarios de desarrollador y como pedir un aumento'} subtitulo={'By Raúl Acosta'} imagen='1_q6soTOf9P8Igl3sxDximM0ejf61Ubdb'/>
            <article>
            <Titulo>¿Por qué saber los salarios de desarrollador?</Titulo>
            <Titulo>¿Cuáles son los requisitos para ser parte del top 10% de desarrolladores de software?</Titulo>
            <Parrafo>Soy un colaborador individual con un rol de desarrollo de software especializado en un área que es el desarrollo front end. (Individual contributor)</Parrafo>
            <Parrafo>Existe también el cargo de manager / ejecutivo, en el que se tienen personas a cargo. (manager)</Parrafo>
            <Parrafo>También están los fundadores o emprendedores. Inician empresas y revolucionan la industria. (founder)</Parrafo>
            <Titulo>Requisitos mínimos para ser parte del promedio</Titulo>
            <Parrafo>
                <os>
                    <li>Aprender inglés (30%+ salario) Inglés del 70% mínimo hablado y escrito.</li>
                    <li>Tener una marca personal profesional (Mostrar skills, logros, progreso).</li>
                    <li>Fundamentos sólidos.</li>
                    <li>Conocimientos de algebra, estadística, Linux, Unix, Mac, matemáticas discretas.</li>
                    <li>Sabes escribir para internet.</li>
                    <li>Incansable curiosidad intelectual (nunca parar de aprender).</li>
                    <li>Para Individual contributor se requiere una alta especialización.</li>
                    <li>El Junior, Mid, Senior son conceptos inventados. Los niveles del 0 al 8 son los importantes. La importancia y el nivel radica en el alto impacto que se aporte.</li>
                    <li>Únete a empresas y proyectos por la misión y no por el salario.</li>
                </os>
            </Parrafo>
            <Titulo>Gráfica de promedio de sueldos de desarrolladores de software a lo largo de los años.</Titulo>
            <Imagen src={'1EbcAn-t_j8DH4_hzWSEJyfdk7EfLYS9q'} title={'Gráfica de salarios de desarrolladores de software en latinoamerica según usuarios de Platzy'}/>
            <Parrafo>Vemos la media de los salarios de los programadores según su nivel. El 75% promedio de los desarrolladores perciben una media entre 20 y 32 mil pesos al mes, mientras que el top 25% de los desarrolladores perciben una media entre 38 y 50 mil pesos al mes.</Parrafo>
            <Parrafo>Sin embargo yo he visto propuestas laborales que llegan hasta los 80 mil pesos al mes, con cargos para los desarrolladores mejor posicionados en la industria. Cabe mencionar que en negociaciones de servicio, el salario se puede alcanzar mucho más dependiendo la experiencia y el valor que puede aportar el desarrollador.</Parrafo>
            <Imagen src={'17EljVQTkBukWPNmtry7LpLF2mcxzohXE'} title={'Gráfica de promedio de salarios según diferentes páginas'}/>
            <Parrafo>En esta gráfica la página glassdoor.com encuentra salarios altos hasta 60mil pesos al mes, mientras que indeed solo llega a los 27mil pesos al mes.</Parrafo>
            <Parrafo>Por lo anterior, es importante tener en cuenta que algunas páginas toman como salario alto al promedio más alto, y no a los salarios top de desarrolladores mejores pagados.</Parrafo>
            <Titulo>Consejos para pedir un aumento de suelto</Titulo>
            <Parrafo>Preguntar cuáles son mis áreas de oportunidad.</Parrafo>
            <Titulo>¿Cómo crecer aumentar mi sueldo en mi empresa como desarrollador?</Titulo>
            <Parrafo>Ocurre de acuerdo al perfil</Parrafo>
            <Titulo>Datos curiosos...</Titulo>
            <Parrafo>Dato curioso... "Por Qué" es para pregunta y "Porque" es para respuesta</Parrafo>
            </article>
        </div>
    )
}
export default SalariosDeDesarrollador;