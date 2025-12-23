import type { Producto } from "../types/General.type.js";
import axios from "./axios.js";

export const getAllproductos = async () => {
  const response = await axios.get("productostodos");
  return response.data as Producto[];
};

export const getProductosVenderRequest = async () => {
  const response = await axios.get("productos");
  return response.data as Producto[];
};
export const getProductobyIdRequest = async (id: number) => {
  const response = await axios.get(`productos/${id}`);
  return response.data as Producto;
};

export const createProductoRequest = async (values: FormData) => {
  return await axios.post(`productos`, values);
};

export const updateProductoRequest = async (values: FormData, id: number) => {
  values.append("_method", "PUT");

  return await axios.post(`productos/edit/${id}`, values);
};

export const deleteProgramaRequest = async (id: number) =>
  await axios.delete(`/productos/${id}`);
