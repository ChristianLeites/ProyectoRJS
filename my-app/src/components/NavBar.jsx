import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Empresa X</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Categorias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Productos</a>
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