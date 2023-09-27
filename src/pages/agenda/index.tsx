import { Container } from "./styles";
import { AgendaCalendar } from "../../components/agendaCalendar";
import { AgendaEvent, AgendaEventEmpty } from "../../domains/agendaEvent";
import { agendaPageStore } from "../../store/agendaListPage";
import { useToast } from "@chakra-ui/react";
import { useGetAgendaList } from "../../services/requests/events";
import { EventDetail } from "./components/eventDetail";
import { agendaDetailPageStore } from "../../store/agendaDetailPage";
import { useTranslation } from "react-i18next";
import { Preloader } from "../../components/preloader";

export const Agenda = () => {
  const { filters, updateRangeDate } = agendaPageStore();
  const { openDetail } = agendaDetailPageStore();
  const toast = useToast();
  const { t } = useTranslation();
  const { data, isLoading, error } = useGetAgendaList(filters);

  if (error) {
    toast({
      title: t(
        "pages.update_reseted_password.error_request_list_events_message"
      ),
      status: "error",
    });
  }

  const onSelectEvent = (event: AgendaEvent) => {
    const { end, start } = event;

    openDetail({ id: event.id, isOpen: true, start, end });
  };

  const onSelectSlot = (event: AgendaEventEmpty) => {
    const { start, end } = event;

    openDetail({ id: 0, isOpen: true, start, end });
  };

  return (
    <Container>
      <Preloader isLoading={isLoading}>
        <AgendaCalendar
          events={data?.agenda ?? []}
          onSelectEvent={onSelectEvent}
          onSelectSlot={onSelectSlot}
          defaultDate={new Date()}
          onRangeChange={updateRangeDate}
        />

        <EventDetail />
      </Preloader>
    </Container>
  );
};
