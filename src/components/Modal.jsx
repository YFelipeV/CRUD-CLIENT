import { useState } from "react";
import { usuarios } from "../context/contexto";

function Modal() {
  const {
    setapellido,
    setcelular,
    setnombre,
    nombre,
    apellido,
    celular,
    operationModal,
  } = usuarios();

  return (
    <>
      <div
        className="modal fade"
        id="modalformulario"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                FORMULARIO
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ingrese nombre"
                  onChange={(e) => setnombre(e.target.value)}
                  value={nombre}
                />
                <input
                  type="text"
                  className="my-2 form-control"
                  placeholder="ingrese apellido"
                  onChange={(e) => setapellido(e.target.value)}
                  value={apellido}
                />
                <input
                  type="number"
                  className="form-control"
                  placeholder="ingrese celular"
                  onChange={(e) => setcelular(e.target.value)}
                  value={celular}
                />
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary w-50"
                onClick={() => operationModal()}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
