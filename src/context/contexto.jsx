import { createContext, useContext, useState } from "react";
import { getAdmin, postAdmin, deleteAdmin, putAdmin } from "../data/api";
export const ServicesContext = createContext();

export const usuarios = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};

export const ServicesContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [celular, setcelular] = useState("");
  const [getId, setId] = useState("");
  const [operacion, setOperacion] = useState();

  const loadData = async () => {
    const response = await getAdmin();
    console.log(response);
    setData(response);
  };
  const openModal = async (op, nombre, apellido, celular, id) => {
    setnombre("");
    setapellido("");
    setcelular("");
    if (op === 1) {
      setOperacion(1);
    } else if (op === 2) {
      setId(id);
      setOperacion(2);
      setnombre(nombre);
      setapellido(apellido);
      setcelular(celular);
    }
  };

  const operationModal = () => {
    if (operacion === 1) {
      const PostData = async () => {
        const response = await postAdmin({ nombre, apellido, celular });
        setData([...data, { nombre, apellido, celular }]);
      };

      PostData();
    } else if (operacion === 2) {
      const PutData = async () => {
        const response = await putAdmin(getId, { nombre, apellido, celular });
        setData(
          data.map((item) =>
            item.id === getId ? { nombre, apellido, celular } : item
          )
        );
      };
      PutData();
    }
  };

  const DeleteData = async (id) => {
    const response = await deleteAdmin(id);
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <ServicesContext.Provider
      value={{
        loadData,
        data,
        DeleteData,
        setnombre,
        setapellido,
        setcelular,
        openModal,
        nombre,
        apellido,
        celular,
        operationModal,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
