import { create } from "zustand";
export type ModalType = "openmenu";
interface MenuToggleStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMenuToggle = create<MenuToggleStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
