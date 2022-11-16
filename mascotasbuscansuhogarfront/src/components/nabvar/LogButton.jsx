import { Link } from "react-router-dom";
import "../../Style.css";

function LogButton(props) {
    let logButton = undefined;
    if (props.logged) {
        logButton = (
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <li
                    classname="nav-item mx-0 mx-lg-1"
                    data-bs-toggle="modal"
                    data-bs-target="#mascotasperdidas"
                >
                    <h3 class="nav-link py-3 px-0 px-lg-3 rounded">
                        Registro <br />
                        mascotas perdidas
                    </h3>
                </li>
                <li
                    class="nav-item mx-0 mx-lg-1"
                    data-bs-toggle="modal"
                    data-bs-target="#mascotasencontradas"
                >
                    <h3 class="nav-link py-3 px-0 px-lg-3 rounded">
                        Registro
                        <br />
                        Mascotas Encontradas
                    </h3>
                </li>
                <h3 class="nav-link py-3 px-0 px-lg-3 rounded">
                    Cerrar
                    <br />
                    Sesion
                </h3>
            </div>
        );
    } else {
        logButton = (
            <Link to={"/login"}>
                <h3 class="nav-link py-3 px-0 px-lg-3 rounded">
                    Iniciar
                    <br />
                    Sesion
                </h3>
            </Link>
        );
    }
    return <div className="me-2 ms-5">{logButton}</div>;
}

export default LogButton;
