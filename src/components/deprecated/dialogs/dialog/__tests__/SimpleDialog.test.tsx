import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from 'primereact/button';
import SimpleDialog from '../SimpleDialog';
import '@testing-library/jest-dom';

describe('SimpleDialog', () => {
  const mockSendVisible = jest.fn();

  beforeEach(() => {
    mockSendVisible.mockClear();
  });

  it('renders dialog with correct header and content', () => {
    const headerText = 'Dialog Header';
    const contentText = 'Dialog Content';
    render(
      <SimpleDialog
        content={<div>{contentText}</div>}
        header={headerText}
        sendVisible={mockSendVisible}
        visible
        onHide={() => {}}
      />,
    );

    expect(screen.getByText(headerText)).toBeInTheDocument();
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('render content of footer correctly', () => {
    const footerContent = (
      <div>
        <Button className="p-button-text" icon="pi pi-times" label="No" />
        <Button icon="pi pi-check" label="Yes" autoFocus />
      </div>
    );
    render(
      <SimpleDialog
        content={<div>Dialog Content</div>}
        footerContent={footerContent}
        header="Dialog Header"
        sendVisible={mockSendVisible}
        visible
        onHide={() => {}}
      />,
    );

    expect(screen.getAllByRole('button').length).toBe(3); // 3 buttons, the two in the footer and the one that is created whit the dialog
  });
});
