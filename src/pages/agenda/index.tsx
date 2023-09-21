import { EmptyState } from "../../components/emptyState";
import { Container } from "./styles";
import { useCallback, useMemo, useState } from "react";
import { ScheduleCalendar } from "../../components/scheduleCalendar";
import {
  ScheduleCalendarEvent,
  ScheduleCalendarEventEmpty,
} from "../../domains/scheduleCalendarEvent";

export const Agenda = () => {
  const [events, setEvents] = useState<ScheduleCalendarEvent[]>([]);

  const onSelectEvent = (event: ScheduleCalendarEvent) => {
    const { title, end, start } = event;
    console.log("title, end, start :", title, end, start);
  };

  const onSelectSlot = (event: ScheduleCalendarEventEmpty) => {
    const { start, end } = event;

    const title = window.prompt('New Event Name')
    if (title) {
      setEvents((prev) => [...prev, { start, end, title }])
    }
    
    console.log("start, end :", start, end);
  };

  return (
    <Container>
      <ScheduleCalendar
        events={events}
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
      />
      {/* <EmptyState /> */}
    </Container>
  );
};
