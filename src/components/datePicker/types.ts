import { CalendarContainerProps } from "react-datepicker";

export enum CalendarDateTimeFormat {
  DATE_TIME_PT_BR = "dd/MM/yyyy HH:mm"
}

export interface Props extends CalendarContainerProps {
  selected: Date;
  onChange: (e: Date) => void;
  showTimeSelect?: boolean;
  timeIntervals?: number;
  dateFormat?: string;
}
