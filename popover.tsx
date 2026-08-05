import { create } from 'zustand';

interface CocoRoseStore {
  currentProductName: string;
  setCurrentProductName: (name: string) => void;
}

export const useCocoRoseStore = create<CocoRoseStore>((set) => ({
  currentProductName: '',
  setCurrentProductName: (name) => set({ currentProductName: name }),
}));
