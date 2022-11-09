import logo1 from '../img/13.jpg';
import logo2 from '../img/1.jpg';
import "../Style.css";

function Section() {
    return (
        <div>
            <section class="page-section portfolio" id="portfolio">
                <div class="container">
                    <h5 class="page-section-heading text-center text-uppercase text-secondary mb-0">
                        ¿Me conoces?
                    </h5>

                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon">
                            <i class="fas fa-cat"></i>
                        </div>
                        <div class="divider-custom-line"></div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-4 mb-5">
                            <div
                                class="portfolio-item mx-auto"
                                data-bs-toggle="modal"
                                data-bs-target="#portfolioModal1"
                            >
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white">
                                        <i class="fas fa-plus fa-3x"></i>
                                    </div>
                                        <h1>
                                            Mascotas <br />
                                            Perdidas
                                        </h1>
                                </div>
                                <img
                                    class="img-fluid"
                                    src={logo1}
                                    alt="..."
                                />
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-5">
                            <div
                                class="portfolio-item mx-auto"
                                data-bs-toggle="modal"
                                data-bs-target="#portfolioModal2"
                            >
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white">
                                        <i class="fas fa-plus fa-3x"></i>
                                    </div>
                                        <h1>
                                            Mascotas <br />
                                            Encontradas{" "}
                                        </h1>
                                </div>
                                <img
                                    class="img-fluid"
                                    src={logo2}
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page-section bg-primary text-white mb-0" id="about">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-white">
                        Información
                    </h2>

                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon">
                            <i class="fas fa-paw"></i>
                        </div>
                        <div class="divider-custom-line"></div>
                    </div>

                    <div class="row">
                        <div class="info col-lg-5 ms-auto ">
                            <p class="lead">
                                Si tienes un peludito perdido registra la
                                información en el formulario dando clic en
                                "registro de mascotas perdidas" recuerda llenar
                                todos los campos y dar una descripción lo mas
                                detallada posible del peludo, alguna
                                característica, el lugar y la fecha donde fue
                                visto por última vez.
                            </p>
                        </div>
                        <div class="info col-lg-5 me-auto ">
                            <p class="lead">
                                Pero si por el contrario tienes un peludito que
                                acabas de encontrar registra la información en
                                el formulario dando clic en "registro de
                                mascotas encontradas" recuerda dar una
                                descripción lo mas detallada posible del peludo,
                                lugar y fecha donde encontraste al peludito.
                            </p>
                        </div>
                    </div>

                    <div class="text-center mt-4">
                        <h3>
                            ¡Recuerda que hay un peludito buscando su hogar,{" "}
                            <br />
                            ayudanos a que vuelva a casa!
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Section;
