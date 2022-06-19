import mifoto from '../../../Imagenes/miFoto.jpg';
import './css/Portada.css';
const Portada = ()=>{
    return (
        <article className='primerArticulo'>
            <div className="portadaPrimerArticulo">
            </div>
            <img src={mifoto} alt="foto raul acosta desarrollador web front end"/>
            <h1>Raúl Acosta</h1>
            <h2>Desarrollador Front End</h2>
        </article>
    )
}
export default Portada;