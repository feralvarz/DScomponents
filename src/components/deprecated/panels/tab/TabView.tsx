import { TabViewProps } from 'src/types/components/panels/TabView';
import { FC } from 'react';
import { TabView as PrimeReactTabView } from 'primereact/tabview';

/**
 * @deprecated use Tabs from components/Tabs/Tabs
 */
const TabView: FC<TabViewProps> = ({ ...props }) => <PrimeReactTabView {...props} />;

export default TabView;
