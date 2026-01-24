import axios from "./axios.js";

export const getFacturasRequest = async () => {
  return await axios.get("facturas");
};
export const deleteFacturasRequest = async (id: number) => {
  return await axios.delete(`facturas/${id}`);
};
