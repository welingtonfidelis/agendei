export interface Props {
  refetchList: () => void;
}

export interface FormProps {
  title: string;
  detail: string;
  start: Date;
  end: Date;
}
