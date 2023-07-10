export type TextVariant = 'h1' | 'h2' | 'h3' | 'base' | 'badge' | 'xs' | 'pre';
export type TextWeight = 'normal' | 'semi' | 'bold';

export type TextProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant: TextVariant;
  weight?: TextWeight;
};
