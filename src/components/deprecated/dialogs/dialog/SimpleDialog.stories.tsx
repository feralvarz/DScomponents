import { ReactNode, useState } from 'react';
import { Button } from 'primereact/button';
import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import Input from '../../inputs/simple-input/Input';
import SimpleDialog from './SimpleDialog';

export default {
  title: 'Deprecated/Dialog',
  component: SimpleDialog,
  decorators: [withDesign],
} as Meta<typeof SimpleDialog>;

const Template: StoryFn<typeof SimpleDialog> = (args) => {
  const [visible, setVisible] = useState(true);
  const [data1, setData1] = useState<string>();
  const [data2, setData2] = useState<string>();
  const sendVisible = (dialogVisible: boolean) => {
    setVisible(dialogVisible);
  };
  const sendData = (data: any) => {
    setData1(data.data1Local);
    setData2(data.data2Local);
  };
  const footerContent = (
    <div>
      <Button
        className="p-button-text"
        icon="pi pi-times"
        label="No"
        onClick={() => sendVisible(false)}
      />
      <Button
        icon="pi pi-check"
        label="Yes"
        autoFocus
        onClick={() => {
          sendVisible(false);
        }}
      />
    </div>
  );
  const content = (
    <div>
      <Input
        className="w-full"
        id="input1"
        label="label 1"
        placeholder="place holder 1"
        value={data1}
        required
        onChange={(e: any) => {
          setData1(e.target.value);
        }}
      />
      <Input
        className="w-full"
        id="input2"
        label="label 2"
        placeholder="place holder 2"
        value={data2}
        required
        onChange={(e: any) => {
          setData2(e.target.value);
        }}
      />
    </div>
  );
  return (
    <div className="card flex justify-content-center">
      <Button
        icon="pi pi-external-link"
        label="Show"
        onClick={() => {
          setVisible(true);
        }}
      />
      <SimpleDialog
        content={content}
        footerContent={footerContent}
        header="Header"
        sendData={sendData}
        sendVisible={sendVisible}
        visible={visible}
        onHide={() => {
          sendVisible(false);
        }}
      />
    </div>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  header: 'Titulo',
  visible: true,
};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=31-2884&t=9Ld8LvfljYsbDI6U-0',
  },
};
