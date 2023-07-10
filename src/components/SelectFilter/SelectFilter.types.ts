import { SelectProps } from '../Select/Select.types';

export type SelectFilterProps = {
  onFilter?: (search: string, offset: number) => void;
  loading?: boolean;
  loadingMessage?: string;
  emptyMessage?: string;
} & SelectProps;
