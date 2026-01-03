import type { Movimiento, MovimientoPaginacion } from "../types/General.type.js";
import axios from "./axios.js";

// Obtener todos los movimientos
export const getMovimientosRequest = async (page:string) => {
  const response = await axios.get(page);
  return response.data as MovimientoPaginacion;
};

// Crear un movimiento
export const createMovimientoRequest = async (values: Movimiento) => {
  return await axios.post("movimientos", values);
};


// Eliminar un movimiento
export const deleteMovimientoRequest = async (id: number) => {
  return await axios.delete(`movimientos/${id}`);
};
