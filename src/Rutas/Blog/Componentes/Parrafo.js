import './Css/Parrafo.css';
const Parrafo =({children})=>{
    return (
        <div className='contenedorParrafo'>
            <span className='parrafo'>{children}</span>
        </div>
    )
}
export default Parrafo;