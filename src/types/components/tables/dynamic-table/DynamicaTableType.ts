import { ReactElement } from 'react';
import { DSComponentProps } from 'src/types/component';

interface Data {
  [index: string]: any;
}

interface DynamicTableFilters {
  [index: string]: any;
}

interface ColumnMeta {
  field: string;
  header: string;
  content?: (data: Data) => ReactElement;
}

interface TableData {
  data: Data[];
  totalRecords: number;
  page: number;
}

interface DynamicTableProps extends DSComponentProps {
  columns: ColumnMeta[];
  updateData: (page: number, limit: number, filters: DynamicTableFilters) => Promise<void>;
  data: TableData;
  tableSize?: 'small' | 'normal' | 'large';
  maxRowsPerPage?: number;
  errorMessage?: string;
  notResultsMessage?: string;
  fullTableSize?: boolean;
  loading: boolean;
}

export type { DynamicTableProps, Data, ColumnMeta, DynamicTableFilters, TableData };
