import { Container } from "./styles";
import { AgendaCalendar } from "../../components/agendaCalendar";
import { AgendaEvent, AgendaEventEmpty } from "../../domains/agendaEvent";
import { agendaPageStore } from "../../store/agendaListPage";
import { useToast } from "@chakra-ui/react";
import { useGetAgendaList } from "../../services/requests/events";
import { EventDetail } from "./components/eventDetail";
import { agendaDetailPageStore } from "../../store/agendaDetailPage";

export const Agenda = () => {
  const { filters, updateRangeDate } = agendaPageStore();
  const { updateIsOpen } = agendaDetailPageStore();
  const toast = useToast();
  const { getQueryKey, data, isLoading, error } = useGetAgendaList(filters);

  if (error) {
    toast({ title: "test", description: "boaboba" });
  }

  const onSelectEvent = (event: AgendaEvent) => {
    const { title, end, start } = event;
    console.log("event :", event);
    updateIsOpen({ id: event.id, isOpen: true });
  };

  const onSelectSlot = (event: AgendaEventEmpty) => {
    const { start, end } = event;
    console.log("event :", event);
    updateIsOpen({ id: null, isOpen: true });
  };

  return (
    <Container>
      <AgendaCalendar
        events={data?.agenda ?? []}
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        defaultDate={new Date()}
        onRangeChange={updateRangeDate}
      />

      <EventDetail />
    </Container>
  );
};
