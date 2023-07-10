import { DialogCloseEvent } from '../Dialog/Dialog.types';

export type DialogFormFooterProps = {
  onHide: (event: DialogCloseEvent) => void;
  acceptLabel: string;
  cancelLabel: string;
  disabled?: boolean;
};
