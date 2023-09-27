import { useMutation, useQuery } from "react-query";
import { EndPoints } from "../../../shared/enum/endPoints";

import {
  createEvent,
  deleteEvent,
  getAgendaList,
  updateEvent,
  getEventById
} from "./apiRequests";
import { AgendaListPayload, GetEventByIdPayload } from "./types";

const { LIST, GET } = EndPoints.AGENDA;

// ===== MUTATES ===== //
export const useCreateEvent = () => {
  const { mutate, isLoading } = useMutation(createEvent);

  return { createEvent: mutate, isLoading };
};

export const useUpdateEvent = () => {
  const { mutate, isLoading } = useMutation(updateEvent);

  return { updateEvent: mutate, isLoading };
};

export const useDeleteEvent = () => {
  const { mutate, isLoading } = useMutation(deleteEvent);

  return { deleteEvent: mutate, isLoading };
};

// ===== QUERIES ===== //
export const useGetAgendaList = (params: AgendaListPayload) => {
  const getQueryKey = () => [LIST, params];

  const { data, refetch, isLoading, error } = useQuery(getQueryKey(), () =>
    getAgendaList(params)
  );

  return { getQueryKey, refetch, data, isLoading, error };
};

export const useGetEventById = (params: GetEventByIdPayload) => {
  const getQueryKey = () => [GET, params];

  const { data, refetch, isLoading, error } = useQuery(getQueryKey(), () =>
    getEventById(params)
  );

  return { getQueryKey, refetch, data, isLoading, error };
};
