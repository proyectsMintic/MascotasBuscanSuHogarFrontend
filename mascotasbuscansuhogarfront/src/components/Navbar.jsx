import { Link } from "react-router-dom";
import logo from "../img/logoAzul.png";
import "../Style.css";
import MascotasPerdidas from "./modals/MascotasPerdidas";
import MascotasEncontradas from "./modals/MascotasEncontradas";
import LogButton from "./nabvar/LogButton";

function Navbar(props) {
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
                        aria-controls="collapseExample"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    >
                        Menú
                        <i classname="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li classname="nav-item mx-0 mx-lg-1">
                            <LogButton logged={props.logged} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <MascotasPerdidas />
            <MascotasEncontradas />
        </div>
    );
}

export default Navbar;
