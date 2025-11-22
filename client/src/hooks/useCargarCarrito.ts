import { useEffect } from "react";
import { readLocalStorage } from "../utils/useLocalStorage";
import type { Carrito } from "../types/General.type";
import { useCarritoStore } from "../stores/carritoStore";

export const useCargarCarrito = () => {
  const { setCarrito, carrito } = useCarritoStore();

  const carritoGuardado = readLocalStorage("carrito") as Carrito;
  useEffect(() => {
    carritoGuardado.total &&
      carritoGuardado.total > 0 &&
      setCarrito(carritoGuardado);
  }, []);

  return { carrito };
};
