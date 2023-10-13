import { create } from "zustand";
import { State, Action, FiltersType } from "./types";
import { endOfWeek, startOfWeek } from "date-fns";
import { isArray } from "lodash";

const initiaState = {
  filters: {
    start_date: startOfWeek(new Date()),
    end_date: endOfWeek(new Date()),
  },
  filtersType: FiltersType,
};

export const eventPageStore = create<State & Action>((set) => ({
  ...initiaState,

  updateRangeDate: (data) => {
    return set((state) => {
      if (isArray(data)) {
        return {
          ...state,
          filters: {
            start_date: data[0],
            end_date: data.length > 1 ? data[data.length - 1] : undefined,
          },
        };
      }

      const { start, end } = data;
      return {
        ...state,
        filters: { start_date: start, end_date: end },
      };
    });
  },
}));
