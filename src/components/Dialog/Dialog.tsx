import { memo } from 'react';
import './Dialog.overrides.css';

import type { DialogCloseEvent, DialogProps } from './Dialog.types';
import { getClassName, modalContent, formWrapper } from './Dialog.styles';
import { Dialog as PrimeDialog } from 'primereact/dialog';

const closeAction: DialogCloseEvent = { action: 'close', data: null };

/**
 * Dialog component
 */
export const Dialog = memo(function Dialog(props: DialogProps) {
  return (
    <PrimeDialog
      header={props.header}
      onHide={() => props.onHide(closeAction)}
      className={getClassName(props)}
      visible
      draggable={false}
    >
      <div className={modalContent}>
        <div className={formWrapper}>{props.children}</div>
      </div>
    </PrimeDialog>
  );
});
