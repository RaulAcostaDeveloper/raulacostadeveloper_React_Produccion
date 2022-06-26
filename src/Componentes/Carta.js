import './css/Carta.css';
const driveUrl = 'http://drive.google.com/uc?export=view&id='
const Carta =({imagen,titulo,informacion, tags, link, linkName})=>{
    return (
        <div className='carta'>
                <div className='topCarta'>
                    <img src={driveUrl+imagen}/>
                </div>
                <div className='bottomCarta'>
                    <h3 className='tituloCarta'>{titulo}</h3>
                    <p className='informacionCarta'>{informacion}</p>
                    <p className='tagsCarta'>{tags}</p>
                </div>
            <a target='_blank' href={link}>{linkName}</a>
        </div>
    )
}
export default Carta;