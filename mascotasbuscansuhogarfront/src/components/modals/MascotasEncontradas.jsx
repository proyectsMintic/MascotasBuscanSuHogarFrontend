function MascotasEncontradas(){
    return (
        <div
            class="modal align-content-xl-center"
            id="mascotasencontradas"
            tabindex="-1"
            aria-labelledby="mascotaencontradas"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title align-content-center">Mascotas Encontradas</h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div>
                        <form id="formulario">
                            <div class="row form-group">
                                <label for="tipo" class="col-form-label col-md-4">Especie</label>
                                <div class="form-group col-md-8">
                                    <select class="form-control" id="especie" required>
                                        <option>Canino</option>
                                        <option>Felino</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row form-group">
                                <label for="edad" class="col-form-label col-md-4">Edad aproximada</label>
                                <div class="col-md-8">
                                    <input type="text" name="edad" value="" id="edad" class="form-control "
                                        placeholder="Ejm: 2 años" required />
                                </div>
                            </div>
                            <br/>
                            <div class="row form-group">
                                <label for="tipo" class="col-form-label col-md-4">Sexo</label>
                                <div class="form-group col-md-8">
                                    <select class="form-control" id="sexo" required>
                                        <option>Macho</option>
                                        <option>Hembra</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row form-group">
                                <label for="color" class="col-form-label col-md-4">Color</label>
                                <div class="col-md-8">
                                    <input type="text" name="color" value="" id="color" class="form-control"
                                        placeholder="Ejm: Negro con manchas cafés" required/>
                                </div>
                            </div>
                            <br/>
                            <div class="row form-group">
                                <label for="raza" class="col-form-label col-md-4">Raza</label>
                                <div class="col-md-8">
                                    <input type="text" name="raza" value="" id="raza" class="form-control"
                                        placeholder="Ejm: Labrador" required/>
                                </div>
                            </div>
                            <br/>
                            <div class="row form-group">
                                <label for="descripcion" class="col-form-label col-md-4">Descripción</label>
                                <div class="col-md-8">
                                    <i class=" font-italic .small">Escriba una breve descripción de la
                                        mascota,
                                        lugar donde la encontro y
                                        cualquier característica que nos ayude a encontrar el hogar del
                                        peludito.</i>
                                        <p/>
                                    <textarea rows="4" name="descripcion" value="" id="descripcion" class="form-control"
                                        placeholder="Descripción..." required></textarea>
                                </div>
                            </div>
                            <br/>
                            <div class="row form-group">
                                <label for="fecha" class="col-form-label col-md-4">Fecha</label>
                                <div class="col-md-8">
                                    <input type="date" name="fecha" value="fecha" id="fecha" class="form-control"
                                        required/>
                                </div>
                            </div>
                            <br/>
                            <div class="row form-group">
                                <label for="fot" class="col-form-label col-md-4">foto</label>
                                <div class="col-md-8">
                                    <p class=" font-italic .small">Pega en este campo el link de la foto que subiste a
                                        "https://dash.img.vision/free-image-uploads"</p>
                                    <input type="text" name="foto" value="" id="foto" class="form-control"
                                        placeholder="https://d.img.vision/imagen/image.jpeg" required/>
                                </div>
                            </div>
                            <br/><br/>
                        </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button type="button" class="btn btn-primary">
                                Guardar Registro
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MascotasEncontradas;