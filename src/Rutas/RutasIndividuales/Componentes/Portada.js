import './css/Portada.css';
const driveUrl = 'http://drive.google.com/uc?export=view&id='
const Portada = ({imagen, titulo, subtitulo})=>{
    return (
        <article className='primerArticulo'>
            <div className="portadaPrimerArticulo">
            </div>
            <img src={driveUrl+imagen} alt="foto raul acosta desarrollador web front end"/>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </article>
    )
}
export default Portada;