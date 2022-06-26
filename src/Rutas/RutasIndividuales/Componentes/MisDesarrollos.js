import Carta from '../../../Componentes/Carta';
import Contenedor from '../../../Componentes/Contenedor';


const MisDesarrollos =()=>{
    const cartas = [
        {
            link:'https://micontroldegastos.com/',
            imagen:'1DW3gR7i0TnYTxedQIj9ixO68SXuugTg8',
            titulo:'Mi Control De Gastos',
            informacion:'Aplicación web progresiva en producción, instalable en todos los dispositivos.',
            tags:'#Html, #Css, #JavaScript, #ProgresiveWebApp, #ResponsiveDesign',
            linkName:'Ir a aplicación',
        },
        {
            link:'https://github.com/RaulAcostaDeveloper/BookFriend',
            imagen:'140GkWdov2uj3b5itBcQeEYyylL1ghDS-',
            titulo:'BookFriend',
            informacion:'Prueba técnica de aplicación de biblioteca para añadir, editar, compartir libros entre usuarios.',
            tags:'#Html, #Css, #JavaScript, #ProgresiveWebApp, #ResponsiveDesign',
            linkName:'Ir a aplicación',
        },
        {
            link:'https://asaderodelabuelo.com/',
            imagen:'1ve3JvxpYF_aarfF5-TEY3eV6qDvtOe31',
            titulo:'Asadero del abuelo',
            informacion:'Landing page para restaurante, con logo animado, acceso al menú, QR, fotos, animaciones y redes.',
            tags:'#Html, #Css, #JavaScript, #GSAP, #ResponsiveDesign',
            linkName:'Ir a página web',
        },
        {
            link:'https://raulacosta95.github.io/Pagina_Presentacion/',
            imagen:'1bzRNr6yzDLAAma6Wj39lNpxeiUYCugXT',
            titulo:'Página de presentación',
            informacion:'Ejemplo de página de presentación para certificación Front End.',
            tags:'#Html, #Css',
            linkName:'Ir a página web',
        },
        {
            link:'https://raulacosta95.github.io/BlackHair_Page/',
            imagen:'1hhE4A2_viDd2MWOSsIUWoQQxzWahU04J',
            titulo:'Ejemplo de landing page',
            informacion:'Página donde muestro algunas de las cosas que se pueden implementar en una landing page.',
            tags:'#Html, #Css, #JavaScript, #GSAP',
            linkName:'Ir a la página web',
        },
        {
            link:'https://raulacostadeveloper.github.io/Plantilla1_LandingPage/',
            imagen:'1VmQp_dmk0qcVx81Lfnqmsd0gMj72ADx2',
            titulo:'Ejemplo de landing page',
            informacion:'Página donde desarrollo un menú desplegable para movile y carrucel hecho vanila sin frameworks.',
            tags:'#Html, #Css, #JavaScript',
            linkName:'Ir a aplicación',
        },
        {
            link:'https://raulacosta95.github.io/AlarmaOnline/',
            imagen:'16VYwgi9wLwKIFHOn-_RO97DGIjKzRQ1Z',
            titulo:'Alarma online app',
            informacion:'Aplicación de alarma hecha con JQuery.',
            tags:'#Html, #Css, #JavaScript, #JQuery',
            linkName:'Ir a aplicación',
        },        {
            link:'https://raulacosta95.github.io/KickHisAssGame/',
            imagen:'1z12-PQFmPptD12EYbCieyp15GtK33D8o',
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