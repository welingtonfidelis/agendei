export type State = {
  id?: number | null;
  isOpen: boolean;
};

export type Action = {
  updateIsOpen: (e: { id?: number | null, isOpen: boolean }) => void;
};
