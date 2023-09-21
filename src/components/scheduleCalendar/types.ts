import {
  ScheduleCalendarEvent,
  ScheduleCalendarEventEmpty,
} from "../../domains/scheduleCalendarEvent";

export type Props = {
  events: ScheduleCalendarEvent[];
  onSelectEvent: (e: ScheduleCalendarEvent) => void;
  onSelectSlot: (e: ScheduleCalendarEventEmpty) => void;
};
