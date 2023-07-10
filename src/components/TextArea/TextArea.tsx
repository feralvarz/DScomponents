import { forwardRef, memo } from 'react';

import type { TextAreaProps } from './TextArea.types';
import { getClassName } from './TextArea.styles';
import { ForwardRef } from 'src/types';
import { Label } from '../Label/Label';

/**
 * Text area component.
 */
export const TextArea: ForwardRef<HTMLTextAreaElement, TextAreaProps> = memo(
  forwardRef(function TextArea(props: TextAreaProps, ref) {
    return (
      <div>
        {props?.label && (
          <Label htmlFor={props.id} text={props?.label} required={props?.required} />
        )}
        <textarea {...props} id={props.id} ref={ref} className={getClassName(props)} />

        {props?.error && <Label text={props?.error} error />}
        {!props.readOnly && !props?.error && props?.hint && (
          <Label text={props?.hint} className="text-gray-400" />
        )}
      </div>
    );
  }),
);
