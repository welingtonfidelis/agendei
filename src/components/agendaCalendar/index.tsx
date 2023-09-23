import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { ptBR } from "date-fns/locale";

import { Props } from "./types";
import { useTranslation } from "react-i18next";

export const AgendaCalendar = (props: Props) => {
  const { events, defaultDate, onRangeChange, onSelectEvent, onSelectSlot } = props;
  const { t } = useTranslation();

  const locales = {
    ptBR: ptBR,
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const messageTranslate = {
    today: t("components.schedule_calendar.calendar_action_today"),
    previous: t("components.schedule_calendar.calendar_action_previous"),
    next: t("components.schedule_calendar.calendar_action_next"),
    month: t("components.schedule_calendar.calendar_action_month"),
    week: t("components.schedule_calendar.calendar_action_week"),
    day: t("components.schedule_calendar.calendar_action_day"),
    agenda: t("components.schedule_calendar.calendar_action_agenda"),
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      selectable
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      messages={messageTranslate}
      defaultView="week"
      defaultDate={defaultDate}
      onRangeChange={onRangeChange}
    />
  );
};
