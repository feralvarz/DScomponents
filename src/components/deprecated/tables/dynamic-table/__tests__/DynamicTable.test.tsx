/* eslint-disable no-promise-executor-return */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { ColumnMeta } from 'src/types/components/tables/dynamic-table/DynamicaTableType';
import DynamicTable from '../DynamicTable';
import { ProductService } from '../mock-data/MockData';
import '@testing-library/jest-dom';

const failedGetData = () => Promise.reject();
const onEdit = (rowData: any) => rowData.id ?? null;
const onDelete = (rowData: any) => rowData.id ?? null;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const structure: ColumnMeta[] = [
  {
    header: 'Code',
    field: 'code',
  },
  {
    header: 'Name',
    field: 'name',
  },
  {
    header: 'Description',
    field: 'description',
  },
  {
    header: 'Image',
    field: 'image',
  },
  {
    header: 'Price',
    field: 'price',
  },
  {
    header: 'Category',
    field: 'category',
  },
  {
    header: 'Quantity',
    field: 'quantity',
  },
  {
    header: 'Inventory Status',
    field: 'inventoryStatus',
  },
];

xdescribe('DynamicTable', () => {
  it('should render correctly', async () => {
    let data = await ProductService.getProductsWithSlice(1, 10);
    const getData = async (page: number, limit: number) => {
      data = await ProductService.getProductsWithSlice(page, limit);
    };

    render(
      <DynamicTable
        columns={structure}
        data={data}
        loading={false}
        theme="main"
        updateData={getData}
      />,
    );
    const tableHeaders = screen.getAllByRole('columnheader');
    expect(tableHeaders.length).toBe(structure.length);
  });

  it('should render paginator buttons', async () => {
    let data = await ProductService.getProductsWithSlice(1, 10);
    const getData = async (page: number, limit: number) => {
      data = await ProductService.getProductsWithSlice(page, limit);
    };

    render(
      <DynamicTable
        columns={structure}
        data={data}
        loading={false}
        theme="main"
        updateData={getData}
      />,
    );
    await act(async () => {
      await sleep(2100);
    });
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(7); // 7 buttons in the paginator
  });

  // it('should render error message', async () => {
  //   let data = await ProductService.getProductsWithSlice(1, 10);
  //   const getData = async (page: number, limit: number) => {
  //     data = await ProductService.getProductsWithSlice(page, limit);
  //   };

  //   render(
  //     <DynamicTable
  //       columns={structure}
  //       data={data}
  //       loading={false}
  //       theme="main"
  //       updateData={getData}
  //     />,
  //   );
  //   const rows = document.getElementsByClassName('p-paginator-icon pi pi-angle-right');
  //   act(() => {
  //     userEvent.click(rows[0]);
  //   });
  //   expect(
  //     await screen.findByText('Error al buscar la siguiente pagina, favor de intentar nuevamente'),
  //   ).toBeInTheDocument();
  // });
});
