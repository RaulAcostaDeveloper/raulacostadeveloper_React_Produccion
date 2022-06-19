import './css/ContactoScreen.css';
import twitter from '../../../Imagenes/Redes/twitter.png';
import outlook from '../../../Imagenes/Redes/outlook.png';
import linkedin from '../../../Imagenes/Redes/linkedin.png';
import github from '../../../Imagenes/Redes/github.png';

const ContactoScreen=({toggleContacto})=>{
    return (
    <article id="contactoScreen" className='contactoScreen'>
        <div id="headerContacto" onClick={toggleContacto}>
            <h3>Contacto</h3>
        </div>
        <div id="articleContacto">
            <p>Estos son mis sitios oficiales</p>
            <a target="_blank" href="https://www.linkedin.com/in/raulacostaservicio/">
                <img src={linkedin} alt="Logo Linked In"/>
            </a>
            <a target="_blank"  href="mailto:raulacostadeveloper@outlook.com?Subject=Contacto%20de%20raulacostaservicio.com%20mail">
                <img src={outlook} alt="Logo Outlook"/>
            </a>
            <a target="_blank" href="https://twitter.com/RaulAcostaDev">
                <img src={twitter} alt="Logo Twitter"/>
            </a>
            <a target="_blank" href="https://github.com/RaulAcostaDeveloper">
                <img src={github} alt="Logo GitHub"/>
            </a>
        </div>
    </article>
    )
}
export default ContactoScreen;