export const FiltersType = {
  START_DATE: 'start_date',
  END_DATE: 'end_date',
  VIEW_TYPE: 'view_type'
}

export type State = {
  filters: {
    start_date: Date;
    end_date?: Date;
  };
};

export type Action = {
  updateRangeDate: (e: Date[] | { start: Date, end: Date }) => void;
};
