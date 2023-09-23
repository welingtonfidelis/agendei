import {
  AgendaEvent,
  AgendaEventEmpty,
} from "../../domains/agendaEvent";

export type Props = {
  events: AgendaEvent[];
  defaultDate: Date;
  onRangeChange: (e: Date[] | { start: Date, end: Date }) => void;
  onSelectEvent: (e: AgendaEvent) => void;
  onSelectSlot: (e: AgendaEventEmpty) => void;
};
