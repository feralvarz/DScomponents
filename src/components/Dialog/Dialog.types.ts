export type DialogAction = 'edit' | 'create' | 'accept' | 'close';

export type DialogCloseEvent<T = null> = {
  action: DialogAction;
  data: T | null;
};

export type DialogProps<D = any> = {
  children: React.ReactNode;
  className?: string;
  onHide: (event: DialogCloseEvent<D>) => void;
  header: string | React.ReactNode;
};
