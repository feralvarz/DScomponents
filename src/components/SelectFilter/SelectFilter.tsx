import { forwardRef, memo, useMemo, useState } from 'react';

import type { SelectFilterProps } from './SelectFilter.types';

import { Select } from '../Select/Select';
import type { ForwardRef } from 'src/types';
import { Dropdown } from 'primereact/dropdown';
import { useSelectFilterLogic } from './SelectFilter.logic';

/**
 * Select filter component
 * Wrapper to add search capabilities to Select component
 *
 */
export const SelectFilter: ForwardRef<Dropdown, SelectFilterProps> = memo(
  forwardRef(function SelectFilter(props: SelectFilterProps, ref) {
    const { filter, loading, handlers, loadingMessage, emptyMessage } = useSelectFilterLogic(props);

    const loadMessage = useMemo(
      () => (loading ? loadingMessage : emptyMessage),
      [loading, loadingMessage, emptyMessage],
    );

    return (
      <Select
        {...props}
        ref={ref}
        filter
        emptyMessage={loadMessage}
        emptyFilterMessage={loadMessage}
        onFilter={handlers.filter}
        filterMatchMode={props?.filterMatchMode ?? 'contains'}
      />
    );
  }),
);
