import { create } from "zustand";
import type { Dialog } from "../types/General.type";

type DialogState = {
  dialog: Dialog;
  setDialog: (estado: Dialog) => void;
};

export const useDialogStore = create<DialogState>((set) => ({
  dialog: {}as Dialog,
  setDialog: (estado: Dialog) => set({ dialog: estado }),
}));
