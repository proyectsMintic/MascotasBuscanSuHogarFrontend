import "../Style.css";
import logo02 from "../img/03.jfif";
import { Link } from "react-router-dom";
function Register(props) {
    return (
        <div>
            <section class="page-section portfolio" id="portfolio">
                <div class="container">
                    <br /> <br /> <br /> <br />
                    <div class="container-fluid h-custom">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-md-8 col-lg-5 col-xl-5">
                                <form>
                                    <h3>Registro</h3>
                                    <hr />
                                    <div class="row g-3">
                                        <div class="col">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Nombre"
                                                aria-label="name"
                                                id="registerinput"
                                            />
                                        </div>
                                        <div class="col">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Apellido"
                                                aria-label="lastname"
                                                id="registerinput"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row g-3">
                                        <div class="col">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Correo Electronico"
                                                aria-label="email"
                                                id="registerinput"
                                            />
                                        </div>
                                        <div class="col">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Telefono"
                                                aria-label="phone"
                                                id="registerinput"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row g-3">
                                        <div class="col">
                                            <input
                                                type="password"
                                                class="form-control"
                                                placeholder="Contraseña"
                                                aria-label="pasword"
                                                id="registerpassword"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row g-3">
                                        <div class="col">
                                            <input
                                                type="password"
                                                class="form-control"
                                                placeholder="Confirmar Contraseña"
                                                aria-label="password"
                                                id="registerpassword"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="d-flex justify-content-between align-items-left">
                                        <div class="form-check mb-0">
                                            <input
                                                class="form-check-input me-2"
                                                type="checkbox"
                                                id="check"
                                                value=""
                                            />
                                            <label
                                                class="form-check-label"
                                                for="form2Example3"
                                            >
                                                Acepto terminos y condiciones.
                                            </label>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="d-flex  align-items-center">
                                        <button
                                            type="button"
                                            class="btn btn-primary btn-lg"
                                            id="botoningresar"
                                        >
                                            Registrarme
                                        </button>
                                        <Link to="/Login">
                                        <button
                                            type="button"
                                            class="btn btn-primary btn-lg"
                                            id="botoncancelar"
                                        >
                                            Cancelar
                                        </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-7 col-lg-5 col-xl-4 offset-xl-1">
                                <img
                                    src={logo02}
                                    class="img-fluid"
                                    alt="..."
                                    id="registerlogo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
