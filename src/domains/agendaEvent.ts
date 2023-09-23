export type AgendaEventEmpty = {
  start: Date;
  end: Date;
};

export type AgendaEvent = {
  id: number;
  client_name: string;
  medical_specialty: string;
  start: Date;
  end: Date;
};