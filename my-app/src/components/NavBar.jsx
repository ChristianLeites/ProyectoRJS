import {
  Link
} from 'react-router-dom';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/'>
        <a class="navbar-brand">Empresa X</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        </Link>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <Link to='/'>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to='categories'>
                Categorias
              </Link>
            </li>
            <li class="nav-item">
              <Link to='productos'>
                Productos
              </Link>
            </li>
            <li class="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </nav>
    )
    
}
export default NavBar;