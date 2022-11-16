import getData from "../js/getData";
import Page from "./table/page";
import "../Style.css";

function Principal(props) {
    let datosTable = getData("url", {}, "get", {});
    return (
        <div clas="container">
            <br /> <br /> <br /> <br />
            <section class="page-section portfolio" id="portfolio">
                <br />
                <div clas="container">
                    <h5 class="page-section-heading text-center text-uppercase text-secondary mb-0">
                        Mascotas Registradas
                    </h5>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon">
                            <i class="fas fa-cat"></i>
                        </div>
                        <div class="divider-custom-line"></div>
                    </div>
                </div>
                <Page
                    name={"Registros de Mascotas"}
                    data={datosTable}
                    path={"/Index"}
                    columns={["Imagen, id, Observacion", " "]}
                    columnsAlias={[" "]}
                    tools={["v"]}
                />
            </section>
        </div>
    );
}

export default Principal;