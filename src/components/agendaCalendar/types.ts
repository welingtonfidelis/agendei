import { View } from "react-big-calendar";
import { AgendaEvent, AgendaEventEmpty } from "../../domains/agendaEvent";

export type Props = {
  events: AgendaEvent[];
  defaultView: View;
  defaultDate?: Date;
  onRangeChange: (e: Date[] | { start: Date; end: Date }) => void;
  onSelectEvent: (e: AgendaEvent) => void;
  onSelectSlot: (e: AgendaEventEmpty) => void;
};
