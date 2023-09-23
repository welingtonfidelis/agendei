import { AgendaEvent } from "../../../domains/agendaEvent";

// Request
export interface AgendaListPayload {
  start_date: Date;
  end_date?: Date;
}

// Response
export interface AgendaListResponse {
  total: number;
  agenda: AgendaEvent[];
}
