import { Routes, Route, Link} from 'react-router-dom';
import Portafolio from './Rutas/RutasIndividuales/Portafolio';
import IndexBlog from './Rutas/Blog/IndexBlog';
import SalariosDeDesarrollador from './Rutas/Blog/SalariosDeDesarrolladorBlog';
const Rutas = ()=>{
    return (
        <Routes>
            <Route exact path="/" element={<Portafolio/>}/>
            <Route exact path="/blog" element={<IndexBlog/>}/>
            <Route exact path="/blog/salariodesarrollador" element={<SalariosDeDesarrollador/>}/>
        </Routes>
    )

}
export default Rutas;