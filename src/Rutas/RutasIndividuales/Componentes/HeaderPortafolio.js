import {Link} from 'react-router-dom';
import './css/HeaderPortafolio.css'
const HeaderPortafolio =({toggleContacto})=>{
    return (
        <div>
            <header>
                <nav>
                    <a onClick={toggleContacto}>Contacto</a>
                    <Link to="/blog">Blog</Link>
                </nav>
            </header>
        </div>
    )
}
export default HeaderPortafolio;