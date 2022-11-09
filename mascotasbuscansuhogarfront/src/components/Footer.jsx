import "../Style.css";

function Footer() {
    return (
        <div>
            <footer className="footer text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Localización</h4>
                            <p class="lead text-center">Colombia</p>
                        </div>
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">
                                Síguenos en la web
                            </h4>
                            <section class="botonfooter">
                            <div class="container p-4 pb-0">
                            <button
                                            type="button"
                                            class="btn btn-primary btn-floating mx-2"
                                            id="sociales1"
                                        >
                                <i class="fa fa-facebook" />
                                </button>
                                <button
                                            type="button"
                                            class="btn btn-primary btn-floating mx-2"
                                            id="sociales1"
                                        >
                                <i href="#" class="fa fa-twitter" />
                                </button>
                                <button
                                            type="button"
                                            class="btn btn-primary btn-floating mx-2"
                                            id="sociales1"
                                        >
                                <i href="#" class="fa fa-google-plus" />
                                </button>
                                <button
                                            type="button"
                                            class="btn btn-primary btn-floating mx-2"
                                            id="sociales1"
                                        >
                                <i href="#" class="fa fa-youtube" />
                                </button>
                                <button
                                            type="button"
                                            class="btn btn-primary btn-floating mx-2"
                                            id="sociales1"
                                        >
                                <i href="#" class="fa fa-linkedin" />
                                </button>
                            </div>
                            </section>
                        </div>
                        <div class="col-lg-4">
                            <h4 class="text-uppercase mb-4">Acerca MBH</h4>
                            <p class="lead text-center">
                                Mascotas buscan su hogar.
                            </p>
                        </div>
                    </div>
                    <br />
                    <div class="copyright text-center text-white">
                        <br />
                        <small>Copyright &copy; Your Website 2022</small>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;
