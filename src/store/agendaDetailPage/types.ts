export type State = {
  id?: number;
  isOpen: boolean;
  start: Date;
  end: Date;
};

export type Action = {
  openDetail: (e: State) => void;
  closeDetail: () => void;
};
