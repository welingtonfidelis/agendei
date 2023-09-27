import { AgendaEvent } from "../../../domains/agendaEvent";

// Request
export interface AgendaListPayload {
  start_date: Date;
  end_date?: Date;
}

export interface GetEventByIdPayload {
  id?: number;
}

export interface CreateEventPayload {
  title: string;
  detail: string;
  start: Date;
  end: Date;
}

export interface UpdateEventPayload {
  id: number;
  data: {
    title?: string;
    detail?: string;
    start?: Date;
    end?: Date;
  }
}

export interface DeleteEventPayload {
  id: number;
}

// Response
export interface AgendaListResponse {
  total: number;
  agenda: AgendaEvent[];
}

export interface GetEventResponse extends AgendaEvent {}
