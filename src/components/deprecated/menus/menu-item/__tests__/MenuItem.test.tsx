import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuItem from '../MenuItem';

describe('MenuItem', () => {
  describe('Rendering', () => {
    it('should render without errors', () => {
      // Act
      render(<MenuItem theme="main" title="Test Title" />);

      // Assert
      // The component should render without any errors
    });

    it('should render the correct title', () => {
      // Act
      const { getByText } = render(<MenuItem theme="main" title="Test Title" />);

      // Assert
      // The component should render the correct title
      expect(getByText('Test Title')).toBeInTheDocument();
    });

    it('should render the correct icon', () => {
      // Act
      const { getByTestId } = render(<MenuItem icon="test-icon" theme="main" title="Test Title" />);

      // Assert
      // The component should render the correct icon
      expect(getByTestId('menu-item-icon')).toHaveClass('ri-test-icon');
    });

    it('should render the correct href', () => {
      // Act
      const { getByTestId } = render(
        <MenuItem href="http://test.com" theme="main" title="Test Title" />,
      );

      // Assert
      // The component should render the correct href
      expect(getByTestId('menu-item')).toHaveAttribute('href', 'http://test.com');
    });

    it('should show the arrow when showArrow is true', () => {
      // Act
      const { getByTestId } = render(<MenuItem theme="main" title="Test Title" showArrow />);

      // Assert
      // The component should show the arrow
      expect(getByTestId('menu-item-arrow')).toBeInTheDocument();
    });
  });

  describe('Functionality', () => {
    it('should rotate when the arrow is clicked', () => {
      // Arrange
      const { getByTestId } = render(<MenuItem theme="main" title="Test Title" showArrow />);
      const arrowButton = getByTestId('menu-item-arrow');

      // Act
      fireEvent.click(arrowButton);

      // Assert
      expect(arrowButton).toBeInTheDocument();
      expect(arrowButton).toHaveClass('rotate-180');

      // Act
      fireEvent.click(arrowButton);

      // Assert
      expect(arrowButton).not.toHaveClass('rotate-180');
    });

    it('should call onToggle when the arrow is clicked', () => {
      // Arrange
      const onToggle = jest.fn();
      const { getByTestId } = render(
        <MenuItem theme="main" title="Test Title" showArrow onToggle={onToggle} />,
      );
      const arrowButton = getByTestId('menu-item');

      // Act
      fireEvent.click(arrowButton);

      // Assert
      // The onToggle function should be called
      expect(onToggle).toHaveBeenCalled();
    });
  });
});
