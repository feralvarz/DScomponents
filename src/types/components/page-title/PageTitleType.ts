import { DSComponentProps } from '../../component';

interface BottomButtonsProps extends DSComponentProps {
  label: string;
  iconLeft?: React.ReactNode;
  onClick?: () => void;
}

interface TitleProps extends DSComponentProps {
  label: string;
  actionsBottom?: BottomButtonsProps[];
  actionsTop?: BottomButtonsProps[];
}
export default TitleProps;
