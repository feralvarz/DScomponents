import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ColumnMeta, TableData } from 'src/types/components/tables/dynamic-table/DynamicaTableType';
import { Button } from 'primereact/button';
import { ProductService } from './mock-data/MockData';
import DynamicTable from './DynamicTable';

export default {
  title: 'Deprecated/Dynamic Table',
  component: DynamicTable,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof DynamicTable>;

const Template: StoryFn<typeof DynamicTable> = (args) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<TableData>();

  const getData = async (page: number, limit: number) => {
    setIsLoading(true);
    const remoteData = await ProductService.getProductsWithSlice(page, limit);
    setData(remoteData);
    setIsLoading(false);
  };

  return (
    <DynamicTable
      {...args}
      data={data || { data: [], totalRecords: 0, page: 0 }}
      loading={isLoading}
      updateData={getData}
    />
  );
};

export const Primary = Template.bind({});

const columns: ColumnMeta[] = [
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
  {
    header: 'Actions',
    field: 'actions',
    content: () => (
      <>
        <Button
          className="mr-2 btn-active btn-ghost btn-square btn-xs"
          icon="pi ri-pencil-line"
          severity="secondary"
          size="small"
          type="button"
        />
        <Button
          className="mr-2 btn-active btn-ghost btn-square btn-xs"
          icon="pi ri-delete-bin-line"
          severity="secondary"
          size="small"
          type="button"
        />
      </>
    ),
  },
];

Primary.args = {
  columns,
  fullTableSize: true,
};
