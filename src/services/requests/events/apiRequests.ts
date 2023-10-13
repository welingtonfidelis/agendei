import { EndPoints } from "../../../shared/enum/endPoints";
import RestRequestService from "../api";
import {
  AgendaListPayload,
  AgendaListResponse,
  CreateEventPayload,
  DeleteEventPayload,
  GetEventByIdPayload,
  GetEventResponse,
  UpdateEventPayload,
} from "./types";

const { LIST, GET, CREATE, UPDATE, DELETE } = EndPoints.EVENTS;

export const getAgendaList = async (params: AgendaListPayload) => {
  const { data: response } = await RestRequestService.get<AgendaListResponse>(
    LIST,
    { params }
  );
  return response;
};

export const getEventById = async (params: GetEventByIdPayload) => {
  const { id } = params;

  if (!id) return;

  const { data: response } = await RestRequestService.get<GetEventResponse>(
    GET.replace(":id", String(id))
  );
  return response;
};

export const createEvent = async (payload: CreateEventPayload) => {
  const { data: response } = await RestRequestService.post<{}>(CREATE, payload);
  return response;
};

export const updateEvent = async (payload: UpdateEventPayload) => {
  const { id } = payload;

  const { data: response } = await RestRequestService.patch<{}>(
    UPDATE.replace(":id", String(id)),
    payload
  );
  return response;
};

export const deleteEvent = async (params: DeleteEventPayload) => {
  const { id } = params;

  const { data: response } = await RestRequestService.delete<{}>(
    DELETE.replace(":id", String(id))
  );
  return response;
};
