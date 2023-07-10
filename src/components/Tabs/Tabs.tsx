import './Tabs.css';
import type { TabsProps } from './Tabs.types';
import { memo } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

/**
 * Tabs component
 */

export const Tabs = memo(function Tabs(props: TabsProps) {
  const { model } = props;

  if (model.length === 0) return null;

  return (
    <TabView
      pt={{
        root: () => ({
          className: 'ds-tabs',
        }),
        nav: () => ({
          className: 'ds-tabs__nav',
        }),
      }}
    >
      {model.map((item, index) => (
        <TabPanel
          key={`ds-tab-${index}`}
          {...item}
          pt={{
            root: () => ({
              className: 'ds-tab-panel',
            }),
            headerAction: () => ({
              className: 'focus:!shadow-none',
            }),
            headerTitle: () => ({
              className: 'header-title',
            }),
          }}
        />
      ))}
    </TabView>
  );
});
