import { memo } from 'react';

import type { DialogFormFooterProps } from './DialogFormFooter.types';
import { modalFooter } from './DialogFormFooter.styles';
import { Button } from '../Button/Button';
import { DialogCloseEvent } from '@components/Dialog/Dialog.types';

const closeAction: DialogCloseEvent = { action: 'close', data: null };

/**
 * Modal footer component
 * This component should be used inside a Dialog component with form.
 *  @param onHide - function to close the dialog
 *  @acceptLabel - label for the accept button
 *  @cancelLabel - label for the cancel button
 *  @disabled - disable the accept button
 */
export const DialogFormFooter = memo(function DialogFormFooter(props: DialogFormFooterProps) {
  return (
    <div className={modalFooter}>
      <Button type="button" variant="secondary" onClick={() => props.onHide(closeAction)}>
        {props.cancelLabel}
      </Button>
      <Button variant="primary" disabled={props?.disabled} type="submit">
        {props.acceptLabel}
      </Button>
    </div>
  );
});
