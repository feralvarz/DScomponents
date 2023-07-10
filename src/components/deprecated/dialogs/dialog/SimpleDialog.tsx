import { FC } from 'react';
import { Dialog } from 'primereact/dialog';

import SimpleDialogProps from 'src/types/components/dialog/SimpleDialogType';

/**
 * @deprecated use Dialog from components/Dialog/Dialog
 */
const SimpleDialog: FC<SimpleDialogProps> = ({
  theme = 'main',
  header,
  visible,
  content,
  footerContent,
  sendVisible,
  sendData,
  ...props
}) => (
  <Dialog
    footer={footerContent}
    header={header}
    style={{ width: '50vw' }}
    visible={visible}
    {...props}
  >
    {content}
  </Dialog>
);

export default SimpleDialog;
