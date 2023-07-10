import { getClassName } from './Text.styles';
import { TextProps } from './Text.types';

/**
 * Text component primitive.
 * By default, it renders a span element which can be changed using the `as` prop.
 * @param props.variant - One of the following: `h1`, `h2`, `h3`, `base`, `badge`, `xs`, `pre`.
 * @param props.children - The text to be rendered.
 * @param props.as - The element to be rendered. Defaults to `span`.
 * @param props.className - Additional classes for the element.
 */
export function Text(props: TextProps) {
  const { variant, children, as: TextComponent = 'span' } = props;

  return (
    <TextComponent className={getClassName(variant, props?.weight, props?.className)}>
      {children}
    </TextComponent>
  );
}
