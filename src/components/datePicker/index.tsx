import DatePickerComponent from "react-datepicker";
import { CalendarDateTimeFormat, Props } from "./types";
import { Container } from "./styles";
import { useTranslation } from "react-i18next";

export const DatePicker = (props: Props) => {
  const {
    showTimeSelect = true,
    dateFormat = CalendarDateTimeFormat.DATE_TIME_PT_BR,
    timeIntervals = 30,
    ...rest
  } = props;
  const { t } = useTranslation();

  return (
    <Container>
      <DatePickerComponent
        {...rest}
        showTimeSelect={showTimeSelect}
        timeIntervals={timeIntervals}
        dateFormat={dateFormat}
        timeCaption={t("components.date_picker.time_label")}
      />
    </Container>
  );
};
