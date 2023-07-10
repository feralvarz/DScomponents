import { useState, useEffect, useCallback } from 'react';
import { SelectFilterProps } from './SelectFilter.types';
import { useDebouncedCallback } from 'use-debounce';
import type { DropdownFilterEvent, DropdownChangeEvent } from 'primereact/dropdown';

export const useSelectFilterLogic = (props: SelectFilterProps) => {
  const [isFiltering, setIsFiltering] = useState(false);
  const [filter, setFilter] = useState({
    search: '',
    offset: 0,
  });

  const updateFilters = useCallback((event: DropdownFilterEvent) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      search: event.filter,
      offset: 0,
    }));
    setIsFiltering(false);
  }, []);

  const debouncedHandleFilter = useDebouncedCallback(updateFilters, 500);

  const handleFilter = useCallback(
    (event: DropdownFilterEvent) => {
      setIsFiltering(true);
      debouncedHandleFilter(event);
    },
    [debouncedHandleFilter],
  );

  return {
    filter,
    loading: isFiltering || props?.loading,
    loadingMessage: props?.loadingMessage || 'Cargando...',
    emptyMessage: props?.emptyMessage || 'No se encontraron resultados',
    handlers: {
      filter: handleFilter,
    },
  };
};
