import { useState, FC, useEffect, useCallback } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Ripple } from 'primereact/ripple';
import {
  Paginator,
  PaginatorFirstPageLinkOptions,
  PaginatorLastPageLinkOptions,
  PaginatorNextPageLinkOptions,
  PaginatorPageLinksOptions,
  PaginatorPrevPageLinkOptions,
} from 'primereact/paginator';

import {
  DynamicTableProps,
  Data,
  DynamicTableFilters,
} from 'src/types/components/tables/dynamic-table/DynamicaTableType';

import EmptyContent from '../assets/EmptyContent';

const PageLinksTemplate = (options: PaginatorPageLinksOptions) => {
  const { view, page, totalPages, currentPage, onClick } = options;
  const { startPage, endPage } = view;
  if ((startPage === page && startPage !== 0) || (endPage === page && page + 1 !== totalPages)) {
    return (
      <span className="p-disabled mx-[3.5px]" style={{ userSelect: 'none' }}>
        ...
      </span>
    );
  }

  return (
    <button
      className={`${currentPage === page ? 'underline' : ''} mx-[3.5px]`}
      type="button"
      onClick={onClick}
    >
      {page + 1}
      <Ripple />
    </button>
  );
};

const NextPageButtonTemplate = (options: PaginatorNextPageLinkOptions) => {
  const { disabled, onClick } = options;
  return (
    <button disabled={disabled} type="button" onClick={onClick}>
      <i className="p-paginator-icon pi pi-angle-right" />
      <Ripple />
    </button>
  );
};

const PrevPageButtonTemplate = (options: PaginatorPrevPageLinkOptions) => {
  const { disabled, onClick } = options;
  return (
    <button disabled={disabled} type="button" onClick={onClick}>
      <i className="p-paginator-icon pi pi-angle-left" />
      <Ripple />
    </button>
  );
};

const LastPageButtonTemplate = (options: PaginatorLastPageLinkOptions) => {
  const { disabled, onClick } = options;
  return (
    <button disabled={disabled} type="button" onClick={onClick}>
      <i className="p-paginator-icon pi pi-angle-double-right" />
      <Ripple />
    </button>
  );
};

const FirstPageButtonTemplate = (options: PaginatorFirstPageLinkOptions) => {
  const { disabled, onClick } = options;
  return (
    <button disabled={disabled} type="button" onClick={onClick}>
      <i className="p-paginator-icon pi pi-angle-double-left" />
      <Ripple />
    </button>
  );
};

/**
 * @deprecated This component is not ready to be used, it is still in development.
 */
const DynamicTable: FC<DynamicTableProps> = ({
  columns,
  maxRowsPerPage = 10,
  updateData,
  loading,
  data,
  theme = 'main',
  errorMessage = 'Error al buscar la siguiente pagina, favor de intentar nuevamente',
  notResultsMessage = 'No se encontraron resultados',
  fullTableSize = false,
  ...props
}) => {
  // const [values, setValues] = useState<Data[]>([{}]);
  // const [totalRecords, setTotalRecords] = useState<number>(0);
  // const [first, setFirst] = useState<number>(0);
  // const [getDataError, setGetDataError] = useState<boolean>(false);
  // const tableSize = props.tableSize ?? 'small';

  // const requestData = useCallback(
  //   (fFirst: number, rows: number, filters: DynamicTableFilters) => {
  //     const page = fFirst / maxRowsPerPage;
  //     updateData(page, rows, filters).catch(() => setGetDataError(true));
  //   },
  //   [maxRowsPerPage, updateData],
  // );

  // const changePage = (e: any) => {
  //   setGetDataError(false);
  //   requestData(e.first, e.rows, {});
  // };

  // useEffect(() => {
  //   console.log('use effect');
  //   setValues(
  //     fullTableSize && data.data.length !== 0
  //       ? Array(maxRowsPerPage)
  //           .fill({})
  //           .map((x, idx) => (data.data[idx] ? data.data[idx] : x))
  //       : [...data.data],
  //   );
  //   setFirst(maxRowsPerPage * data.page);
  //   setTotalRecords(data.totalRecords);
  // }, [data, fullTableSize, maxRowsPerPage]);

  // useEffect(() => {
  //   requestData(first, maxRowsPerPage, {});
  // }, [first, maxRowsPerPage, requestData]);

  // const paginatorTemplate = {
  //   layout: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
  //   FirstPageLink: FirstPageButtonTemplate,
  //   PageLinks: PageLinksTemplate,
  //   PrevPageLink: PrevPageButtonTemplate,
  //   NextPageLink: NextPageButtonTemplate,
  //   LastPageLink: LastPageButtonTemplate,
  // };

  // const noResultsBodyTemplate = () => (
  //   <div className="p-5 flex flex-col gap-3 text-center">
  //     <EmptyContent className="block m-auto" />
  //     <h5>{notResultsMessage}</h5>
  //   </div>
  // );

  return (
    <div className="border rounded-none" data-theme={theme}>
      {/* <DataTable
        cellClassName={(value) => (fullTableSize && !value ? 'border-none' : '')}
        emptyMessage={noResultsBodyTemplate()}
        first={first}
        loading={loading}
        rowClassName={(rowData) =>
          fullTableSize && Object.keys(rowData).length === 0 ? 'invisible border-none' : ''
        }
        size={tableSize}
        value={values}
        onPage={(e) => changePage(e)}
      >
        {...columns.map((col) => (
          <Column
            body={col.content}
            field={col.field}
            header={col.header}
            headerClassName="font-bold"
            headerStyle={{ fontWeight: '700 !important' }}
            key={col.field}
          />
        ))}
      </DataTable>
      {values.length !== 0 && (
        <Paginator
          first={first}
          rows={maxRowsPerPage}
          template={paginatorTemplate}
          totalRecords={totalRecords}
          onPageChange={changePage}
        />
      )}
      {getDataError && (
        <div className="flex bg-white justify-center">
          <span className="text-sm text-red-700">{errorMessage}</span>
        </div>
      )} */}
    </div>
  );
};

export default DynamicTable;
