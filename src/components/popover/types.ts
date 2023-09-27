export interface Props {
  title: string;
  description?: string;
  showActionButtons?: boolean;
  leftActionButtonText?: string;
  rightActionButtonText?: string;
  leftActionButtonAction?: () => void;
  rightActionButtonAction?: () => void;
}
