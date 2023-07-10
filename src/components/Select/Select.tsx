import { forwardRef, memo, useMemo, useState } from 'react';
import './Select.css';
import type { ForwardRef } from 'src/types';
import type { SelectProps } from './Select.types';
import { getClassName } from './Select.styles';
import { Dropdown } from 'primereact/dropdown';
import { Label } from '../Label/Label';

/**
 * Select component
 *
 */
export const Select: ForwardRef<Dropdown, SelectProps> = memo(
  forwardRef(function Select(props: SelectProps, ref) {
    const { label = '', disabled = false, required = false, value = null, errorText = '' } = props;
    const labelProps = useMemo(
      () => ({
        text: label,
        disabled,
        required,
      }),
      [label, disabled, required],
    );

    const [selectedValue, setSelectedValue] = useState(value);

    return (
      <div>
        {label && <Label {...labelProps} />}
        <div>
          <Dropdown
            {...props}
            dropdownIcon={<i className="pi pi-chevron-down text-secondary-900" />}
            ref={ref}
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.value)}
            className={getClassName(props?.className)}
          />
        </div>
        {errorText && <Label text={errorText} error />}
      </div>
    );
  }),
);
