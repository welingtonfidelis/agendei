import { useQuery } from "react-query";
import { EndPoints } from "../../../shared/enum/endPoints";

import {
getAgendaList
} from "./apiRequests";
import { AgendaListPayload } from "./types";

const { LIST } = EndPoints.AGENDA;

// ===== MUTATES ===== //

// ===== QUERIES ===== //
export const useGetAgendaList = (params: AgendaListPayload) => {
  const getQueryKey = () => [LIST, params];

  const { data, refetch, isLoading, error } = useQuery(getQueryKey(), () =>
  getAgendaList(params)
  );

  return { getQueryKey, refetch, data, isLoading, error };
};
