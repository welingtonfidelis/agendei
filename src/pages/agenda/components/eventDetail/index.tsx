import { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, FormikHelpers } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";

import { formValidate } from "./helper/formValidate";
import { HttpServerMessageEnum } from "../../../../shared/enum/httpServerMessage";
import { FormProps } from "./types";
import { responseErrorHandler } from "../../../../shared/handlers/responseError";
import { agendaDetailPageStore } from "../../../../store/agendaDetailPage";
import { Drawer } from "../../../../components/drawer";
import { Preloader } from "../../../../components/preloader";
import { DatePicker } from "../../../../components/datePicker";

const { USERNAME_ALREADY_USED, EMAIL_ALREADY_USED } = HttpServerMessageEnum;

export const EventDetail = () => {
  const { t } = useTranslation();
  const validateFormFields = formValidate();
  const toast = useToast();
  const { id, isOpen, updateIsOpen } = agendaDetailPageStore();
  const formRef = useRef<any>();

  const initialFormValues = useMemo(() => {
    return {
      title: "test A",
      detail: "testB",
      start: new Date(),
      end: new Date(),
    };
  }, []);

  const handleCloseModal = () => {
    updateIsOpen({ id: null, isOpen: false });
  };

  const handleSubmit = async (
    values: FormProps,
    actions: FormikHelpers<FormProps>
  ) => {
    console.log("values :", values);

    // updateProfile(formData as any, {
    //   onSuccess() {
    //     toast({
    //       title: t("components.profile_change_password.error_request_message"),
    //     });

    //     handleCloseModal();

    //     // refetch();
    //   },
    //   onError(error) {
    //     const { message } = responseErrorHandler(error);

    //     if (message === USERNAME_ALREADY_USED.message) {
    //       actions.setErrors({
    //         username: t("components.profile.input_username_already_used"),
    //       });
    //     }

    //     if (message === EMAIL_ALREADY_USED.message) {
    //       actions.setErrors({
    //         email: t("components.profile.input_email_already_used"),
    //       });
    //     }

    //     toast({
    //       title: t("components.profile_change_password.error_request_message"),
    //       status: "error",
    //     });
    //   },
    // });
  };

  return (
    <Drawer
      title={
        id
          ? t("components.event_detail.page_edit_tile")
          : t("components.event_detail.page_new_tile")
      }
      onConfirm={() => formRef.current?.handleSubmit()}
      isOpen={isOpen}
      onClose={handleCloseModal}
    >
      <Preloader isLoading={false}>
        <Formik
          innerRef={formRef}
          initialValues={initialFormValues}
          validationSchema={validateFormFields}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <Field name="title">
                {({ field }: any) => (
                  <FormControl isInvalid={!!errors.title && touched.title}>
                    <FormLabel mt="2" mb="0.2">
                      {t("components.event_detail.input_title")}
                    </FormLabel>
                    <Input
                      {...field}
                      placeholder={t("components.event_detail.input_title")}
                    />
                    <FormErrorMessage>{errors.title}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="detail">
                {({ field }: any) => (
                  <FormControl isInvalid={!!errors.detail && touched.detail}>
                    <FormLabel mt="2" mb="0.2">
                      {t("components.event_detail.input_description")}
                    </FormLabel>
                    <Input
                      {...field}
                      placeholder={t(
                        "components.event_detail.input_description"
                      )}
                    />
                    <FormErrorMessage>{errors.detail}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="start">
                {({ field }: any) => (
                  <FormControl>
                    <FormLabel mt="2" mb="0.2">
                      {t("components.event_detail.input_start_date")}
                    </FormLabel>
                      <DatePicker
                        {...field}
                        selected={field.value}
                        onChange={(date) => setFieldValue("start", date)}
                        timeCaption=""
                      />
                  </FormControl>
                )}
              </Field>
              <Field name="end">
                {({ field }: any) => (
                  <FormControl>
                    <FormLabel mt="2" mb="0.2">
                      {t("components.event_detail.input_end_date")}
                    </FormLabel>
                      <DatePicker
                        {...field}
                        selected={field.value}
                        onChange={(date) => setFieldValue("end", date)}
                        timeCaption=""
                      />
                  </FormControl>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </Preloader>
    </Drawer>
  );
};
