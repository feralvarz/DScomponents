import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PageTitle from '../PageTitle';
import '@testing-library/jest-dom';

xdescribe('PageTitle', () => {
  const testLabel = 'Test Label';
  const testActionsTop = [
    {
      label: 'Action 1',
      onClick: jest.fn(),
      iconLeft: <i className="fas fa-pencil-alt" />,
    },
    {
      label: 'Action 2',
      onClick: jest.fn(),
      iconLeft: <i className="fas fa-trash" />,
    },
  ];
  const testActionsBottom = [
    {
      label: 'Save',
      onClick: jest.fn(),
      iconLeft: <i className="fas fa-save" />,
    },
    {
      label: 'Cancel',
    },
  ];

  test('renders label', () => {
    const { getByText } = render(<PageTitle label={testLabel} />);
    expect(getByText(testLabel)).toBeInTheDocument();
  });

  test('renders actionsTop', () => {
    const { getByText } = render(<PageTitle actionsTop={testActionsTop} label={testLabel} />);
    testActionsTop.forEach((action) => {
      const button = getByText(action.label);
      expect(button).toBeInTheDocument();
      userEvent.click(button);
      expect(action.onClick).toHaveBeenCalledTimes(1);
    });
  });

  test('renders actionsBottom', () => {
    const { getByText } = render(<PageTitle actionsBottom={testActionsBottom} label={testLabel} />);
    testActionsBottom.forEach((action) => {
      if (action.label === 'Cancel') return;
      const button = getByText(action.label);
      expect(button).toBeInTheDocument();
      userEvent.click(button);
      expect(action.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
