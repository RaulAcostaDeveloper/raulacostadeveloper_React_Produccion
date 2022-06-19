import Certificado from '../../../Componentes/Certificado';
import Contenedor from '../../../Componentes/Contenedor';

import BasicoDeJavaScript from '../../../Imagenes/Certificados/BásicoDeJavaScript.png';
import AcademiaCells from '../../../Imagenes/Certificados/AcademiaCells-1.png';
import Bootstrap from '../../../Imagenes/Certificados/Bootstrap.png';
import CodigodeEtica from '../../../Imagenes/Certificados/CodigodeEtica-1.png';
import Constanciadelenguaextrangerainglés_page from '../../../Imagenes/Certificados/Constanciadelenguaextrangerainglés_page-0001.jpg';
import DesarrolloSeguro from '../../../Imagenes/Certificados/DesarrolloSeguro-E6BCFDB1A001.png';
import marcapersonal from '../../../Imagenes/Certificados/diploma-marca-personal_page-0001.jpg';
import EstrategiasParaAprenderEnLineaEfectivamente from '../../../Imagenes/Certificados/EstrategiasParaAprenderEnLineaEfectivamente.png';
import FundamentosDeIngenieríaDeSoftware from '../../../Imagenes/Certificados/FundamentosDeIngenieríaDeSoftware.png';
import Inteligenciaemocional from '../../../Imagenes/Certificados/Inteligenciaemocional.png';
import JavaScriptAlgorithmsAndDataStructtures from '../../../Imagenes/Certificados/JavaScriptAlgorithmsAndDataStructtures.png';
import ReactCertificado from '../../../Imagenes/Certificados/React.png';
import ReactNative from '../../../Imagenes/Certificados/ReactNative.jpg';
import ResponsiveWebDesign from '../../../Imagenes/Certificados/ResponsiveWebDesign.png';
import SAFeforTeams from '../../../Imagenes/Certificados/SAFeforTeams-1.png';
import SAFe5Practitioner from '../../../Imagenes/Certificados/SAFe5Practitioner.png';
import SAFeForTeamsCourse from '../../../Imagenes/Certificados/SAFeForTeamsCourse.png';
import ScrumFoundationProfessionalCertificate from '../../../Imagenes/Certificados/ScrumFoundationProfessionalCertificate.png';
import SecurityAwareness_page from '../../../Imagenes/Certificados/SecurityAwareness_page-0001.jpg';

const MisCertificados =()=>{
    const certificados=[
        {
            imagen:BasicoDeJavaScript,
            titulo:'Fundamentos de programación con JavaScript',
            enlace:BasicoDeJavaScript,
        },
        {
            imagen:JavaScriptAlgorithmsAndDataStructtures,
            titulo:'Algoritmos y estructura de datos con JavaScript',
            enlace:JavaScriptAlgorithmsAndDataStructtures,
        },
        {
            imagen:ResponsiveWebDesign,
            titulo:'Diseño web responsivo',
            enlace:ResponsiveWebDesign,
        },
        {
            imagen:AcademiaCells,
            titulo:'Academa Cells. Desarrollo web por componentes',
            enlace:AcademiaCells,
        },
        {
            imagen:ReactCertificado,
            titulo:'React.js',
            enlace:ReactCertificado,
        },
        {
            imagen:ReactNative,
            titulo:'React Native',
            enlace:ReactNative,
        },
        {
            imagen:ScrumFoundationProfessionalCertificate,
            titulo:'Desarrollo con metodología Scrum',
            enlace:ScrumFoundationProfessionalCertificate,
        },
        {
            imagen:SAFeForTeamsCourse,
            titulo:'Certificación de curso de Scaled Agile Framework For Teams',
            enlace:SAFeForTeamsCourse,
        },
        {
            imagen:DesarrolloSeguro,
            titulo:'Desarrollo de software seguro, seguridad de datos, confidencialidad',
            enlace:DesarrolloSeguro,
        },
        {
            imagen:SecurityAwareness_page,
            titulo:'Security Awareness',
            enlace:SecurityAwareness_page,
        },
        {
            imagen:Constanciadelenguaextrangerainglés_page,
            titulo:'Constancia de certificacion de lengua extrangera Inglés',
            enlace:Constanciadelenguaextrangerainglés_page,
        },
        {
            imagen:Bootstrap,
            titulo:'Maquetación web con Bootstrap',
            enlace:Bootstrap,
        },
        {
            imagen:FundamentosDeIngenieríaDeSoftware,
            titulo:'Fundamentos de ingeniería de software',
            enlace:FundamentosDeIngenieríaDeSoftware,
        },
        {
            imagen:CodigodeEtica,
            titulo:'Código de ética',
            enlace:CodigodeEtica,
        },
        {
            imagen:marcapersonal,
            titulo:'Curso de marca personal',
            enlace:marcapersonal,
        },
        {
            imagen:EstrategiasParaAprenderEnLineaEfectivamente,
            titulo:'Curso de estrategias para aprender en línea',
            enlace:EstrategiasParaAprenderEnLineaEfectivamente,
        },
        {
            imagen:Inteligenciaemocional,
            titulo:'Curso de inteligencia emocional',
            enlace:Inteligenciaemocional,
        },
    ]
    return (
    <Contenedor>
        {certificados.map((certificado)=> <Certificado
            imagen={certificado.imagen}
            titulo={certificado.titulo}
            enlace={certificado.enlace}
            key={()=>certificado.titulo}
        />)}
    </Contenedor>
    )
}
export default MisCertificados;