import { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { useDebouncedCallback } from 'use-debounce';
import type { FC } from 'react';
import type { DropdownFilterEvent, DropdownChangeEvent } from 'primereact/dropdown';
import type { DSComponentProps } from '../../../../types/component';

interface FilterDropdownProps extends DSComponentProps {
  id: string;
  label: string;
  placeholder: string;
  optionLabel: string;
  optionValue: string;
  options: any[];
  loading: boolean;
  value?: any;
  onChange?: (event: DropdownChangeEvent) => void;
  onFilter: (search: string, offset: number) => void;
  filterMatchMode?: 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals' | undefined;
  debounceTimeout?: number;
  loadingMessage?: string;
  noResultsMessage?: string;
  required?: boolean;
}

// ? La version original de este componente tenia la funcionalidad de scroll infinito
// ? pero se decidió quitarla por problemas de compatibilidad.
// ? En un futuro se deberia plantear la posibilidad de crear un componente de scrolling
// ? infinito e integrarlo a este componente.

/**
 * @deprecated use SelectFilter from components/SelectFilter/SelectFilter */
const FilterDropdown: FC<FilterDropdownProps> = ({
  id,
  label,
  placeholder,
  optionLabel,
  optionValue,
  options,
  value,
  onChange,
  loading,
  onFilter,
  filterMatchMode,
  debounceTimeout = 500,
  loadingMessage = 'Cargando...',
  noResultsMessage = 'No se encontraron resultados',
  theme = 'main',
  required = false,
}) => {
  const dropdownRef = useRef(null);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filter, setFilter] = useState({
    search: '',
    offset: 0,
  });

  const handleFilter = (event: DropdownFilterEvent) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      search: event.filter,
      offset: 0,
    }));
    setIsFiltering(false);
  };
  const debouncedHandleFilter = useDebouncedCallback(handleFilter, debounceTimeout);

  useEffect(() => {
    onFilter(filter.search, filter.offset);
  }, [filter, onFilter]);

  return (
    <div className="form-control w-full max-w-xs" data-theme={theme}>
      <label className="label" htmlFor={id}>
        <p>
          {label} <span className="text-secondary">{required ? '*' : null}</span>
        </p>
      </label>
      <Dropdown
        disabled={loading}
        dropdownIcon={<i className="pi pi-chevron-down text-secondary" />}
        emptyFilterMessage={loading || isFiltering ? loadingMessage : noResultsMessage}
        emptyMessage={loading || isFiltering ? loadingMessage : noResultsMessage}
        filterMatchMode={filterMatchMode ?? 'contains'}
        id={id}
        optionDisabled={() => loading}
        optionLabel={optionLabel}
        options={options}
        optionValue={optionValue}
        placeholder={placeholder}
        ref={dropdownRef}
        style={{
          border: '1px solid #848389',
        }}
        value={value}
        filter
        onChange={onChange}
        onFilter={(event) => {
          setIsFiltering(true);
          debouncedHandleFilter(event);
        }}
      />
    </div>
  );
};

export default FilterDropdown;
