import './css/Certificado.css';
const driveUrl = 'http://drive.google.com/uc?export=view&id='
const Certificado =({imagen,titulo})=>{
    return (
        <div className='certificado'>
            <div className='topCertificado'>
                <a target='_blank' href={driveUrl+imagen}>
                    <img src={driveUrl+imagen} />
                </a>
            </div>
            <div className='bottomCertificado'>
                <h3 className='tituloCertificado'>{titulo}</h3>
            </div>
        </div>
    )
}
export default Certificado;