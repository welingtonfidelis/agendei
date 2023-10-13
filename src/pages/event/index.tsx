import { Container } from "./styles";
import { AgendaCalendar } from "../../components/agendaCalendar";
import { AgendaEvent, AgendaEventEmpty } from "../../domains/agendaEvent";
import { eventPageStore } from "../../store/eventListPage";
import { useToast } from "@chakra-ui/react";
import { useGetAgendaList } from "../../services/requests/events";
import { EventDetail } from "./components/eventDetail";
import { eventDetailPageStore } from "../../store/eventDetailPage";
import { useTranslation } from "react-i18next";
import { Preloader } from "../../components/preloader";

export const Event = () => {
  const { filters, updateRangeDate } = eventPageStore();
  console.log('filters :', filters);
  const { openDetail } = eventDetailPageStore();
  const toast = useToast();
  const { t } = useTranslation();
  const { data, isLoading, error, refetch } = useGetAgendaList(filters);

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
      {/* <Preloader isLoading={isLoading}> */}
        <AgendaCalendar
          events={data}
          defaultView={'week'}
          onSelectEvent={onSelectEvent}
          onSelectSlot={onSelectSlot}
          onRangeChange={updateRangeDate}
          // onViewChange={updateViewType}
        />

        <EventDetail refetchList={refetch}/>
      {/* </Preloader> */}
    </Container>
  );
};
