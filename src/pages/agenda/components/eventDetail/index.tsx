import { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, FormikHelpers } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";

import { formValidate } from "./helper/formValidate";
import { FormProps } from "./types";
import { agendaDetailPageStore } from "../../../../store/agendaDetailPage";
import { Drawer } from "../../../../components/drawer";
import { Preloader } from "../../../../components/preloader";
import { DatePicker } from "../../../../components/datePicker";
import {
  useCreateEvent,
  useDeleteEvent,
  useGetEventById,
  useUpdateEvent,
} from "../../../../services/requests/events";
import { DeleteButtonContainer } from "./styles";
import { Popover } from "../../../../components/popover";

export const EventDetail = () => {
  const { t } = useTranslation();
  const validateFormFields = formValidate();
  const toast = useToast();
  const { id, start, end, isOpen, closeDetail } = agendaDetailPageStore();
  const { data, error, isLoading: isGetByIdLoading } = useGetEventById({ id });
  const { createEvent, isLoading: isCreateLoading } = useCreateEvent();
  const { updateEvent, isLoading: isUpdateLoading } = useUpdateEvent();
  const { deleteEvent, isLoading: isDeleteLoading } = useDeleteEvent();
  const formRef = useRef<any>();

  const initialFormValues = useMemo(() => {
    return {
      title: data?.title ?? "",
      detail: data?.detail ?? "",
      start: data?.start ?? start,
      end: data?.end ?? end,
    };
  }, [id, start, end]);

  if (error) {
    toast({
      title: t("components.event_detail.error_request_get_event"),
      status: "error",
    });
  }

  const handleCloseModal = () => {
    closeDetail();
  };

  const handleSubmit = async (
    values: FormProps,
    actions: FormikHelpers<FormProps>
  ) => {
    if (id) {
      updateEvent(
        { id: Number(id), data: values },
        {
          onSuccess() {
            toast({
              title: t("components.event_detail.success_request_new_message"),
            });

            handleCloseModal();
          },
          onError(error) {
            toast({
              title: t("components.event_detail.error_request_new_message"),
              status: "error",
            });
          },
        }
      );

      return;
    }

    createEvent(values, {
      onSuccess() {
        toast({
          title: t("components.event_detail.success_request_edit_message"),
        });

        handleCloseModal();
      },
      onError(error) {
        toast({
          title: t("components.event_detail.error_request_edit_message"),
          status: "error",
        });
      },
    });
  };

  const handleDeleteEvent = () => {
    console.log("delete");

    if (!id) return;

    deleteEvent(
      { id },
      {
        onSuccess() {
          toast({
            title: t("components.event_detail.success_request_delete_message"),
          });

          handleCloseModal();
        },
        onError(error) {
          toast({
            title: t("components.event_detail.error_request_delete_message"),
            status: "error",
          });
        },
      }
    );
  };

  const DeleteEventButton = () => {
    if (!id) return <></>;

    return (
      <DeleteButtonContainer>
        <Popover
          title={t("generic.attention_message")}
          description={t("components.event_detail.delete_event_message")}
          rightActionButtonText={t("generic.button_yes")}
          leftActionButtonText={t("generic.button_no")}
          rightActionButtonAction={handleDeleteEvent}
        >
          <Button
            colorScheme="red"
            marginEnd={"2"}
            isLoading={isUpdateLoading ?? isDeleteLoading}
          >
            {t("generic.button_delete")}
          </Button>
        </Popover>
      </DeleteButtonContainer>
    );
  };

  return (
    <Drawer
      title={
        id
          ? t("components.event_detail.page_edit_title")
          : t("components.event_detail.page_new_title")
      }
      onConfirm={() => formRef.current?.handleSubmit()}
      isOpen={isOpen}
      onClose={handleCloseModal}
      extraActionButton={<DeleteEventButton />}
      onConfirmLoading={isCreateLoading ?? isUpdateLoading ?? isDeleteLoading}
    >
      <Preloader isLoading={isGetByIdLoading}>
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
