import type { DSComponentProps } from 'src/types';

type Variant = 'h1' | 'h2' | 'h3' | 'p' | 'pre' | 'span';

export interface TypographyProps extends DSComponentProps {
  className?: string;
  variant?: Variant;
  children?: React.ReactNode;

  // TODO: Remove align, it should be defined from className
  align?: 'left' | 'center' | 'right' | 'justify';
  // TODO: Remove gutterBottom, it should be defined from className for more flexibility
  gutterBottom?: boolean;
  // TODO: Remove noWrap, it should be defined from className
  noWrap?: boolean;
  // TODO: Remove leading, since it's not defined in Design Specs
  leading?: 'normal' | 'relaxed' | 'loose';
}
