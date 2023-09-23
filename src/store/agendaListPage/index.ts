import { create } from "zustand";
import { State, Action, FiltersType } from "./types";
import { endOfWeek, startOfWeek } from "date-fns";
import { isArray } from "lodash";

const initiaState = {
  filters: {
    startDate: startOfWeek(new Date()),
    defaultDate: endOfWeek(new Date()),
  },
  filtersType: FiltersType,
};

export const agendaPageStore = create<State & Action>((set) => ({
  ...initiaState,

  updateRangeDate: (data) => {
    return set((state) => {
      if (isArray(data)) {
        return {
          ...state,
          filters: {
            startDate: data[0],
            endDate: data.length > 1 ? data[data.length - 1] : undefined,
          },
        };
      }

      const { start, end } = data;
      return { ...state, filters: { startDate: start, endDate: end } };
    });
  },
}));
