import Carta from '../../../Componentes/Carta';
import Contenedor from '../../../Componentes/Contenedor';
import alarmaOnline from '../../../Imagenes/portafolio/imagen1.png';
import blackHair from '../../../Imagenes/portafolio/imagen2.png';
import simonDice from '../../../Imagenes/portafolio/imagen3.png';
import paginaPresentacion from '../../../Imagenes/portafolio/imagen4.png';
import landingPage1 from '../../../Imagenes/portafolio/imagen5.png';
import asadero from '../../../Imagenes/portafolio/imagen6.png';
import bookFriend from '../../../Imagenes/portafolio/imagen7.png';
import micontroldegastos from '../../../Imagenes/portafolio/imagen8.png';

const MisDesarrollos =()=>{
    const cartas = [
        {
            link:'https://micontroldegastos.com/',
            imagen:micontroldegastos,
            titulo:'Mi Control De Gastos',
            informacion:'Aplicación web progresiva en producción, instalable en todos los dispositivos.',
            tags:'#Html, #Css, #JavaScript, #ProgresiveWebApp, #ResponsiveDesign',
            linkName:'Ir a aplicación',
        },
        {
            link:'https://github.com/RaulAcostaDeveloper/BookFriend',
            imagen:bookFriend,
            titulo:'BookFriend',
            informacion:'Prueba técnica de aplicación de biblioteca para añadir, editar, compartir libros entre usuarios.',
            tags:'#Html, #Css, #JavaScript, #ProgresiveWebApp, #ResponsiveDesign',
            linkName:'Ir a aplicación',
        },
        {
            link:'https://asaderodelabuelo.com/',
            imagen:asadero,
            titulo:'Asadero del abuelo',
            informacion:'Landing page para restaurante, con logo animado, acceso al menú, QR, fotos, animaciones y redes.',
            tags:'#Html, #Css, #JavaScript, #GSAP, #ResponsiveDesign',
            linkName:'Ir a página web',
        },
        {
            link:'https://raulacosta95.github.io/Pagina_Presentacion/',
            imagen:paginaPresentacion,
            titulo:'Página de presentación',
            informacion:'Ejemplo de página de presentación para certificación Front End.',
            tags:'#Html, #Css',
            linkName:'Ir a página web',
        },
        {
            link:'https://raulacosta95.github.io/BlackHair_Page/',
            imagen:blackHair,
            titulo:'Ejemplo de landing page',
            informacion:'Página donde muestro algunas de las cosas que se pueden implementar en una landing page.',
            tags:'#Html, #Css, #JavaScript, #GSAP',
            linkName:'Ir a la página web',
        },
        {
            link:'https://raulacostadeveloper.github.io/Plantilla1_LandingPage/',
            imagen:landingPage1,
            titulo:'Ejemplo de landing page',
            informacion:'Página donde desarrollo un menú desplegable para movile y carrucel hecho vanila sin frameworks.',
            tags:'#Html, #Css, #JavaScript',
            linkName:'Ir a aplicación',
        },
        {
            link:'https://raulacosta95.github.io/AlarmaOnline/',
            imagen:alarmaOnline,
            titulo:'Alarma online app',
            informacion:'Aplicación de alarma hecha con JQuery.',
            tags:'#Html, #Css, #JavaScript, #JQuery',
            linkName:'Ir a aplicación',
        },        {
            link:'https://raulacosta95.github.io/KickHisAssGame/',
            imagen:simonDice,
            titulo:'Juego Simon dice',
            informacion:'Un juego sencillo parte de una prueba técnica.',
            tags:'#Html, #Css, #JavaScript',
            linkName:'Ir a aplicación',
        },
    ]
    return (
        <Contenedor>
            {cartas.map((carta)=> <Carta
                link={carta.link}
                linkName={carta.linkName}
                imagen={carta.imagen}
                titulo={carta.titulo}
                informacion={carta.informacion}
                tags={carta.tags}
                key={()=>carta.titulo}
            />)}
        </Contenedor>
    )
}
export default MisDesarrollos;