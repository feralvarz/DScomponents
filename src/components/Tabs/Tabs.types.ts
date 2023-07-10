import type { TabPanelProps } from 'primereact/tabview';

type TabItemProps = Omit<TabPanelProps, 'pt'>;

export type TabsProps = {
  model: TabItemProps[];
};
