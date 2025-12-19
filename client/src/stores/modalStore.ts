import { create } from "zustand";
import type { Modal } from "../types/General.type";


type ModalStore = {
  modal: Modal;
  setModal: (estado: Modal) => void;
};

export const useModal = create<ModalStore>((set) => ({
  modal: {
    mensaje: "",
    errorColor: false,
    activo: false,
    navegarA:"",
  },

  setModal: (estado: Modal) => set({ modal: estado }),
}));
