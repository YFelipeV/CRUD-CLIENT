import axios from "axios";
export const getAdmin = async () => {
  try {
    await axios.get("http://localhost:4000/admin");
  } catch (error) {
    console.log(error);
  }
};

export const postAdmin = async ({ nombre, apellido, celular }) => {
  try {
    const response = await axios.post("http://localhost:4000/admin", {
      nombre,
      apellido,
      celular,
    });
  } catch (error) {
    console.log(error);
  }
};

export const putAdmin = async (getId, { nombre, apellido, celular }) => {
  try {
    const response = await axios.put(`http://localhost:4000/admin/${getId}`, {
      nombre,
      apellido,
      celular,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteAdmin = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:4000/admin/${id}`);
  } catch (error) {
    console.log(error);
  }
};
