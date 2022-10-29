import "../Style.css";

function Footer() {
    return (
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Localización</h4>
                        <p class="lead text-center">Colombia</p>
                    </div>

                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Síguenos en la web</h4>
                        <a
                            class="btn btn-outline-light btn-social mx-1"
                            href="#!"
                        >
                            <i class="fab fa-fw fa-facebook-f"></i>
                        </a>
                        <a
                            class="btn btn-outline-light btn-social mx-1"
                            href="#!"
                        >
                            <i class="fab fa-fw fa-twitter"></i>
                        </a>
                        <a
                            class="btn btn-outline-light btn-social mx-1"
                            href="#!"
                        >
                            <i class="fab fa-fw fa-linkedin-in"></i>
                        </a>
                        <a
                            class="btn btn-outline-light btn-social mx-1"
                            href="#!"
                        >
                            <i class="fab fa-fw fa-dribbble"></i>
                        </a>
                    </div>
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">Acerca MBH</h4>
                        <p class="lead text-center">
                            Mascotas buscan su hogar.
                        </p>
                    </div>
                </div>
            </div>
            <br/>
            <div class="copyright py-4 text-center text-white">
                <div class="container">
                    <small>Copyright &copy; Your Website 2022</small>
                </div>
            </div>
        </footer>
        
    );
}
export default Footer;
