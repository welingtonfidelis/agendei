import { create } from "zustand";
import { State, Action } from "./types";

const initiaState = {
  id: null,
  isOpen: false,
};

export const agendaDetailPageStore = create<State & Action>((set) => ({
  ...initiaState,

  updateIsOpen: (data) => {
    return set(() => data);
  },
}));
