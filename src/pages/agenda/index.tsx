import { EmptyState } from "../../components/emptyState";
import { Container } from "./styles";
import { useCallback, useMemo, useState } from "react";
import { AgendaCalendar } from "../../components/agendaCalendar";
import {
  AgendaEvent,
  AgendaEventEmpty,
} from "../../domains/agendaEvent";
import { agendaPageStore } from "../../store/agendaListPage";
import { useToast } from "@chakra-ui/react";

export const Agenda = () => {
  const [events, setEvents] = useState<AgendaEvent[]>([]);
  const { filters, updateRangeDate } = agendaPageStore();
  const toast = useToast();
  // const { getQueryKey, data, isLoading, error } = useGetListUsers(filters);

  if (true) {
    toast({title: 'test', description: 'boaboba'})
  }

  const onSelectEvent = (event: AgendaEvent) => {
    const { title, end, start } = event;
    console.log("title, end, start :", title, end, start);
  };

  const onSelectSlot = (event: AgendaEventEmpty) => {
    const { start, end } = event;

    const title = window.prompt('New Event Name')
    if (title) {
      setEvents((prev) => [...prev, { start, end, title }])
    }
    
    console.log("start, end :", start, end);
  };

  return (
    <Container>
      <AgendaCalendar
        events={events}
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        defaultDate={new Date()}
        onRangeChange={updateRangeDate}
      />
      {/* <EmptyState /> */}
    </Container>
  );
};
