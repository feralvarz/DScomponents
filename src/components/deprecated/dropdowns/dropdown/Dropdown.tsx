import { forwardRef } from 'react';
import { Dropdown as PrimeDropdown } from 'primereact/dropdown';
import type { DropdownType } from '../../../../types';
import './Dropdown.css';

/**
 * @deprecated use Select from components/Select/Select
 */
function Dropdown(props: DropdownType, ref: any) {
  const { id, label, theme = 'main', required } = props;
  return (
    <div className="form-control w-full max-w-xs" data-theme={theme}>
      <label className="label" htmlFor={id}>
        <p>
          {label} <span className="text-secondary">{required ? '*' : null}</span>
        </p>
      </label>
      <PrimeDropdown
        className="border border-gray-800"
        dropdownIcon={<i className="pi pi-chevron-down text-secondary" />}
        id={id}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default forwardRef<PrimeDropdown, DropdownType>(Dropdown);
