import { create } from "zustand";
import type {  Entrega } from "../types/General.type";


type EntregaStore = {
  entrega: Entrega;
  setEntrega: (estado: Entrega) => void;
};

export const useEntregaStore = create<EntregaStore>((set) => ({
  entrega: {} as Entrega,
  setEntrega: (estado: Entrega) => set({ entrega: estado }),
}));
