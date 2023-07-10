import { memo, forwardRef } from 'react';

import type { RadioProps } from './Radio.types';
import { getClassName, radioWrapper } from './Radio.styles';
import { Label } from '../Label/Label';
import type { ForwardRef } from 'src/types';

/**
 * Radio Component.
 */
export const Radio: ForwardRef<HTMLInputElement, RadioProps> = memo(
  forwardRef(function Radio(props: RadioProps, ref) {
    const { className = '', text, children, ...rest } = props;

    if (!text) return null;

    return (
      <Label text={props.text} className={radioWrapper} disabled={!!props?.disabled}>
        <input type="radio" ref={ref} {...rest} className={getClassName(props)} />
      </Label>
    );
  }),
);
