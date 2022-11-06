import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../css/forms.css";

export function formulario() {
    return (
        <Form className="row col-10 col-md-6 justify-content-center ">
            <Form.Group className="mb-3" controlId="formNameLostPet">
                <Form.Label>USUARIO</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el correo con el que se registro "
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNameLostPet">
                <Form.Label>CONTRASEÑA</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña "
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Guardar
            </Button>
        </Form>
    );
}

export default formulario;
