export const FiltersType = {
  START_DATE: 'startDate',
  END_DATE: 'endDate',
}

export type State = {
  filters: {
    startDate: Date;
    endDate?: Date;
  };
};

export type Action = {
  updateRangeDate: (e: Date[] | { start: Date, end: Date }) => void;
};
