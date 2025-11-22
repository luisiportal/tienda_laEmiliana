import { create } from "zustand";
import type { Carrito } from "../types/General.type";
import { writeLocalStorage } from "../utils/useLocalStorage";
import { totalCarrito } from "../utils/slugify";

type CarritoStore = {
  carrito: Carrito;
  setCarrito: (estado: Carrito) => void;
};

export const useCarritoStore = create<CarritoStore>((set) => ({
  carrito: {} as Carrito,
  setCarrito: (estado: Carrito) => {
    const total = totalCarrito({ productos: estado.productos });
    const carritoActualizado = {
      productos: estado.productos,
      total: total,
    };

    set({
      carrito: carritoActualizado,
    });
    writeLocalStorage({ key: "carrito", value: carritoActualizado });
  },
}));
