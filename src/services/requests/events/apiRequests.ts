import { EndPoints } from "../../../shared/enum/endPoints";
import RestRequestService from "../api";
import { AgendaListPayload, AgendaListResponse } from "./types";

const { LIST } = EndPoints.AGENDA;

export const getAgendaList = async (params: AgendaListPayload) => {
  // const { data: response } = await RestRequestService.get<AgendaListResponse>(
  //   LIST,
  //   { params }
  // );

  const response: AgendaListResponse = {
    total: 5,
    agenda: [
      {
        id: 1,
        title: 'Olga',
        detail: 'Geral',
        start: new Date('2023-09-18T10:00:00.346Z'),
        end: new Date('2023-09-18T11:00:00.346Z'),
      },
      {
        id: 2,
        title: 'Kely',
        detail: 'Gravidinha',
        start: new Date('2023-09-20T08:30:00.346Z'),
        end: new Date('2023-09-20T09:00:00.346Z'),
      },
      {
        id: 3,
        title: 'Roberto',
        detail: 'Geral',
        start: new Date('2023-09-18T11:00:00.346Z'),
        end: new Date('2023-09-18T11:30:00.346Z'),
      },
      {
        id: 4,
        title: 'Hellem',
        detail: 'Dermatologista',
        start: new Date('2023-09-22T14:30:00.346Z'),
        end: new Date('2023-09-22T17:00:00.346Z'),
      },
    ]
  }
  return response;
};
