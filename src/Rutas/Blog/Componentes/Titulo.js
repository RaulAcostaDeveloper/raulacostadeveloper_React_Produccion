import './Css/Titulo.css';
const Titulo =({children})=>{
    return (
        <div className='contenedorTitulo'>
            <span className='titulo'>{children}</span>
        </div>
    )
}
export default Titulo;