import './css/Certificado.css';

const Certificado =({imagen,titulo, enlace})=>{
    return (
        <div className='certificado'>
            <div className='topCertificado'>
                <a target='_blank' href={enlace}>
                    <img src={imagen} />
                </a>
            </div>
            <div className='bottomCertificado'>
                <h3 className='tituloCertificado'>{titulo}</h3>
            </div>
        </div>
    )
}
export default Certificado;