import * as Yup from "yup";
import i18n from "i18next";

export const formValidate = () => {
  return Yup.object().shape({
    title: Yup.string().required(i18n.t("generic.required_input_value")),
    detail: Yup.string(),
    start: Yup.date().required(i18n.t("generic.required_input_value")),
    end: Yup.date().required(i18n.t("generic.required_input_value")),
  });
};
