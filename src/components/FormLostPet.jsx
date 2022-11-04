import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../css/forms.css";

export function formulario() {
    return (
        <Form className="form-control-sm">
            <Form.Group className="mb-3" controlId="formNameLostPet">
                <Form.Label>NOMBRE DE LA MASCOTA</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre de la mascota "
                />
            </Form.Group>
            <Form.Group className="mb-8" controlId="formEdadLostPet">
                <Form.Label>EDAD APROXIMADA</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese la edad aproximada de la mascota"
                />
            </Form.Group>
            <Form.Group
                className="mb-3 col-12 col-md-12
                "
                controlId="formEspecieLostPet"
            >
                <Form.Label>ESPECIE</Form.Label>
                <div class="form-group">
                    <select class="form-control" id="especie">
                        <option>Canino</option>
                        <option>Felino</option>
                    </select>
                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSexoLostPet">
                <Form.Label>SEXO </Form.Label>
                <div class="form-group col-md-12">
                    <select class="form-control col-md-12" id="sexo" block>
                        <option>Macho</option>
                        <option>Hembra</option>
                    </select>
                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRazaLostPet">
                <Form.Label>RAZA</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese la raza de la mascota"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescripcionLostPet">
                <Form.Label>DESCRIPCIÓN</Form.Label>
                <textarea
                    rows="4"
                    name="descripcion"
                    value=""
                    id="descripcion"
                    class="form-control"
                    placeholder="Descripción..."
                ></textarea>
                <span class=" font-italic .small highlighted">
                    Indique las mayores caracteristicas de la mascota y a su vez
                    el lugar donde se presento la perdida o el encuentro de la
                    misma. Esto nos ayudara a encontrar su hogar más fácilmente
                </span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFechaLostPet">
                <Form.Label>FECHA</Form.Label>
                <Form.Control
                    type="date"
                    name="fecha"
                    value="fecha"
                    id="fecha"
                    class="form-control"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formfotoLostPet">
                <Form.Label>FOTO</Form.Label>
                <Form.Control
                    type="text"
                    name="foto"
                    value=""
                    id="foto"
                    class="form-control"
                    placeholder="https://d.img.vision/imagen/image.jpeg"
                />
                <span class=" font-italic .small highlighted">
                    Pega en este campo el link de la foto que subiste a
                    "https://dash.img.vision/free-image-uploads
                </span>
            </Form.Group>
            <Button variant="primary" type="submit" justify-content-center>
                Guardar
            </Button>
            <br></br>
        </Form>
    );
}

export default formulario;
