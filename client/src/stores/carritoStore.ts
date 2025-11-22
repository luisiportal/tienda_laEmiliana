import { create } from "zustand";
import type { Carrito } from "../types/General.type";

type CarritoStore = {
  carrito: Carrito;
  setCarrito: (estado: Carrito) => void;
};

export const useCarritoStore = create<CarritoStore>((set) => ({
  carrito: {} as Carrito,
  setCarrito: (estado: Carrito) => set({ carrito: estado }),
}));
