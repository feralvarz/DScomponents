import type { ForwardRef } from 'src/types';
import { forwardRef, memo, useState } from 'react';

import type { PasswordProps } from './Password.types';
import { getClassName } from '../Input/Input.styles';
import { getRevealIcon } from './Password.styles';
import { Label } from '../Label/Label';
import { Button } from '../Button/Button';

/**
 * Input Password Component.
 */
export const Password: ForwardRef<HTMLInputElement, PasswordProps> = memo(
  forwardRef(function Input(props: PasswordProps, ref) {
    const { type = 'text' } = props;
    const [reveal, setReveal] = useState(false);

    return (
      <div>
        {props?.label && (
          <Label htmlFor={props.id} text={props?.label} required={props?.required} />
        )}
        <div className="relative">
          <input
            {...props}
            id={props.id}
            ref={ref}
            type={reveal ? 'text' : 'password'}
            className={getClassName(props)}
          />

          <Button
            variant="ghost"
            className="absolute right-0 top-0"
            onClick={() => setReveal((r) => !r)}
          >
            <i className={getRevealIcon(reveal)} />
          </Button>
        </div>
        {props?.error && <Label text={props?.error} error />}
        {!props.readOnly && !props?.error && props?.hint && (
          <Label text={props?.hint} className="text-gray-400" />
        )}
      </div>
    );
  }),
);
