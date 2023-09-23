export type AgendaEventEmpty = {
  start: Date;
  end: Date;
};

export type AgendaEvent = {
  id: number;
  title: string;
  detail: string;
  start: Date;
  end: Date;
};