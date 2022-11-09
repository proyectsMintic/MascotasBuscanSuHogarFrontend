import { Link } from "react-router-dom";
import logo from "../img/logoAzul.png";
import "../Style.css";


function Navbar() {
    return (
        <div id="navbar">
            <nav
                className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
                id="mainNav"
            >
                <div class="container">
                    
                    
                    <div class="logo1">
                        <Link to={"/"}>
                        <img
                            
                            classname="masthead-avatar mb-5 align-center"
                            src={logo}
                            width="120px"
                            height="120px"
                            alt="..."
                        />
                        </Link>
                    </div>
                    
                    <button
                        class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menú
                        <i classname="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li classname="nav-item mx-0 mx-lg-1">
                                
                                <Link to={"/Principal"} class="nav-link py-3 px-0 px-lg-3 rounded">
                                    Registro <br />
                                    mascotas perdidas
                                </Link>
                            </li>
                            <li class="nav-item mx-0 mx-lg-1">
                                <h3
                                    class="nav-link py-3 px-0 px-lg-3 rounded"
                                >
                                    Registro
                                    <br />
                                    Mascotas Encontradas
                                </h3>
                            </li>
                            <li class="nav-item mx-0 mx-lg-1">
                                <h3
                                    
                                    class="nav-link py-3 px-0 px-lg-3 rounded"
                                >
                                    Iniciar
                                    <br />
                                    Sesion
                                </h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
