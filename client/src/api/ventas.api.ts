import type { Carrito, Categoria, Venta } from "../types/General.type.js";
import axios from "./axios.js";




export const createVentaRequest = async (values: Venta) => {
  return await axios.post('ventas', values);
};
