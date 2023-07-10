import { DialogProps } from 'primereact/dialog';
import { DSComponentProps } from '../../component';

interface Data {
  [index: string]: any;
}

interface SimpleDialogProps extends DialogProps, DSComponentProps {
  header: string;
  footerContent?: React.ReactNode;
  visible: boolean;
  content?: React.ReactNode;
  sendVisible: (dialogVisible: boolean) => void;
  sendData?: (data: Data) => void;
}
export default SimpleDialogProps;
