import React from "react";
import "../css/forms.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function information() {
    return (
        <div>
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-12">
                Mi peludito
            </h2>
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                    <i class="bi bi-emoji-frown"></i>
                </div>
                <div class="divider-custom-line"></div>
            </div>
            <div class="container2 p-2">
                <div class="row justify-content-center col-12 ">
                    <h1 class="display-4">Mascotas Perdidas</h1>
                    <p class="font-italic .small col-md-8">
                        Diligencie los datos correspondientes de la mascota y
                        agregue una breve descripción donde detalle donde y
                        cuando perdió o encontró a la mascota.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default information;
