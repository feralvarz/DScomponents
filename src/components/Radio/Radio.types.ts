export type RadioProps = {
  name: string;
  text: string;
  value: string | number;
} & React.ComponentPropsWithRef<'input'>;
