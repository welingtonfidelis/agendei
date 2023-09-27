import { create } from "zustand";
import { State, Action } from "./types";

const today = new Date();
today.setHours(12);
today.setMinutes(0);

const initiaState = {
  id: 0,
  isOpen: false,
  start: today,
  end: today,
};

export const agendaDetailPageStore = create<State & Action>((set) => ({
  ...initiaState,

  openDetail: (data) => {
    return set(() => data);
  },

  closeDetail: () => {
    return set(initiaState);
  },
}));
