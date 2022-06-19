import { Routes, Route, Link} from 'react-router-dom';
import Portafolio from './Rutas/RutasIndividuales/Portafolio';
import IndexBlog from './Rutas/Blog/IndexBlog';
const Rutas = ()=>{
    return (
        <Routes>
            <Route exact path="/" element={<Portafolio/>}/>
            <Route exact path="/blog" element={<IndexBlog/>}/>
        </Routes>
    )

}
export default Rutas;