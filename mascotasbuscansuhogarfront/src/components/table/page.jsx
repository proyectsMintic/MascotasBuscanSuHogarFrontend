import Table from "./table";

import { useState } from "react";
import "../../Style.css";

function Page() {
    return (
        <div clas="container">
            <br /> <br /> <br /> <br />
            <section class="page-section portfolio" id="portfolio">
                <br/>
                <div clas="container">
                    <h5 class="page-section-heading text-center text-uppercase text-secondary mb-0">
                        Mascotas Registradas
                    </h5>
                </div>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                        <i class="fas fa-cat"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                </div>
                
            </section>
        </div>
    );
}

export default Page;
