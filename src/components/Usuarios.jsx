import Modal from "./Modal";
import { usuarios } from "../context/contexto";

function Usuarios() {
  const { data, DeleteData, openModal } = usuarios();
  return (
    <>
      {data.map(({ id, nombre, apellido, celular }) => (
        <tr key={id}>
          <td>{nombre}</td>
          <td>{apellido}</td>
          <td>{celular}</td>
          <td>
            <button
              onClick={() => openModal(2, nombre, apellido, celular, id)}
              data-bs-toggle="modal"
              data-bs-target="#modalformulario"
            >
              Editar
            </button>
          </td>
          <td>
            <button onClick={() => DeleteData(id)}>borrar</button>
          </td>
          
        </tr>
      ))}
      <Modal />
    </>
  );
}

export default Usuarios;
