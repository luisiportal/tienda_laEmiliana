import type { Categoria } from "../types/General.type.js";
import axios from "./axios.js";

export const getCategoriasRequest = async () => {
  const response = await axios.get("categorias");
  return response.data as Categoria[];
};


export const createCategoriaRequest = async (values: FormData) => {
  return await axios.post('categorias', values);
};

export const updateCategoriaRequest = async (values: FormData, id: number) => {
  values.append("_method", "PUT");

  return await axios.post(`categorias/edit/${id}`, values);
};