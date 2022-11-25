import { Link } from "react-router-dom";
import "../../Style.css";

function Cell(props) {
    let url = props.paht + "/Informacion/" + props.value.id;
    //props.value
    //props.index
    return (
        <th>
            <div
                class="row d-flex justify-content-center align-items-center h-100"
                id="contenedor-cell"
            >
                <div class="col-md-7 col-lg-6 col-xl-4">
                    <Link to={url}>
                        <img src={props.value.url} alt="i" id="img-cell" />
                    </Link>
                </div>

                <div class="col-md-10 col-lg-6 col-xl-6 offset-xl-1">
                    <br />
                    <form>
                        <div class="container">
                            <div class="mb-4 row ">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                >
                                    <h5>Nombre: </h5>
                                </label>
                                <div class="col-sm-9">
                                    <input
                                        type="text"
                                        readonly
                                        class="form-control-plaintext"
                                        id="staticEmail"
                                        value={props.value.nombre}
                                    />
                                </div>
                            </div>
                            <div class="mb-4 row">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                >
                                    <h5>Raza: </h5>
                                </label>
                                <div class="col-sm-9">
                                    <input
                                        type="text"
                                        readonly
                                        class="form-control-plaintext"
                                        id="staticEmail"
                                        value={props.value.raza}
                                    />
                                </div>
                            </div>
                            <div class="mb-4 row">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                >
                                    <h5>Descripción: </h5>
                                </label>
                                <div class="col-sm-9">
                                    <input
                                        type="text"
                                        readonly
                                        class="form-control-plaintext"
                                        id="staticEmail"
                                        value={props.value.descripcion}
                                    />
                                </div>
                            </div>
                            <div class="mb-4 row">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                >
                                    <h5>sexo </h5>
                                </label>
                                <div class="col-sm-8">
                                    <input
                                        type="text"
                                        readonly
                                        class="form-control-plaintext"
                                        id="staticEmail"
                                        value={props.value.sexo}
                                    />
                                </div>
                            </div>
                            <div class="mb-4 row">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                >
                                    <h5>estado: </h5>
                                </label>
                                <div class="col-sm-8">
                                    <input
                                        type="text"
                                        readonly
                                        class="form-control-plaintext"
                                        id="staticEmail"
                                        value={props.value.estado}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </th>
    );
}

export default Cell;
