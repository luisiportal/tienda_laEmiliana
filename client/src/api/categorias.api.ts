import type { Categoria } from "../types/General.type.js";
import axios from "./axios.js";

export const getCategoriasRequest = async () => {
  const response = await axios.get("categorias");
  return response.data as Categoria[];
};