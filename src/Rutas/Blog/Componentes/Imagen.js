import './Css/Imagen.css';
const driveUrl = 'http://drive.google.com/uc?export=view&id='
const Imagen =({src,title})=>{
    return (
        <div className='contenedorImagen'> 
        <a target='_blank' href={driveUrl+src}>
            <img src={driveUrl+src} alt={'Imagen de '+title}/>
        </a>
            <span>{title}</span>
        </div>
    )
}
export default Imagen;