import logo from "../img/login.jpg";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                <br /> <br /> <br /> <br />
                <div class="container-fluid h-custom">
                    <br />
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src={logo} class="img-fluid" alt="..." />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p class="lead fw-normal mb-0 me-4">
                                        Ingresar con
                                    </p>
                                    <section class="boton">
                                        <button
                                            type="button"
                                            class="btn btn-primary btn-floating mx-2"
                                            id="sociales"
                                        >
                                            <i class="fa fa-facebook-f"></i>
                                        </button>

                                        <button
                                            type="button"
                                            class="btn btn-primary btn-floating mx-1"
                                            id="sociales"
                                        >
                                            <i class="fa fa-google-plus"></i>
                                        </button>

                                        <button
                                            type="button"
                                            class="btn btn-primary btn-floating mx-1"
                                            id="sociales"
                                        >
                                            <i class="fa fa-twitter"></i>
                                        </button>
                                    </section>
                                </div>

                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0">
                                        Ó
                                    </p>
                                </div>

                                <div class="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="formulario"
                                        class="form-control form-control-lg"
                                        placeholder="Ingrese su dirección de correo"
                                    />
                                    <label
                                        class="form-label"
                                        for="form3Example3"
                                    >
                                        
                                    </label>
                                </div>

                                <div class="form-outline mb-3">
                                    <input
                                        type="password"
                                        id="form3Example4"
                                        className="form-control form-control-lg"
                                        placeholder="Ingrese su contraseña"
                                    />
                                    <label
                                        className="form-label"
                                        for="form3Example4"
                                    >
                                    </label>
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="form-check mb-0">
                                        <input
                                            class="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            id="check"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="form2Example3"
                                        >
                                            Recuérdame
                                        </label>
                                    </div>
                                    <a href="#!" class="text-body">
                                        Olvidastes tu contraseña?
                                    </a>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-lg"
                                        Style="padding-left: 2.5rem; padding-right: 2.5rem;"
                                        id="botoningresar"
                                    >
                                        Ingresar
                                    </button>
                                    <p class="small fw-bold mt-2 pt-1 mb-0">
                                        No tienes una cuenta?{" "}
                                        <Link
                                            to={"/Login/Registrarse"}
                                            class="link-black"
                                        >
                                            Registrarse
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
