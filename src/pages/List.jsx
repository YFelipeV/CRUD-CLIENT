import { useEffect } from "react";
import Usuarios from "../components/Usuarios";
import { usuarios } from "../context/contexto";

function List() {
  const { loadData, openModal } = usuarios();

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div className="container">
        <table className="table" border={2}>
          <thead className="table-dark bg-dark p-4 text-white">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th> N.Celular</th>
              <th>Opciones</th>
              <th>
                <div className="d-flex justify-content-center w-50">
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#modalformulario"
                    onClick={() => openModal(1)}
                  >
                    {" "}
                    Agregar
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <Usuarios />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default List;
