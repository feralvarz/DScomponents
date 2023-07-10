import type { MenuItem } from 'primereact/menuitem';
import { ItemTemplate } from '../ItemTemplate/ItemTemplate';

const sidebar: Record<string, string> = {
  operationalControl: 'Control operacional',
  synoptic: 'Sinóptico',
  historicalAnalytics: 'Analítica de históricos',
  dashboard: 'Dashboard',
  punctuality: 'Puntualidad',
  stopsAndExpeditions: 'Paradas y expediciones',
  theoreticalRealTime: 'Hora teórica vs. hora real',
  lines: 'Líneas',
  stops: 'Paradas',
  drivers: 'Conductores',
  operationalReports: 'Informes operativos',
  driverTime: 'Tiempo de conductor',
  timebyLine: 'Tiempo por línea',
  kilometersTraveled: 'Kilómetros recorridos',
  vehicleTracking: 'Tracking vehículos',
  notifications: 'AVISOS',
  notificationManagement: 'Gestión de avisos',
  monitoring: 'Monitoring',
  estimationAccuracy: 'Precisión de estimaciones',
  minutes: 'minutos',
  configSupport: 'Configuración y soporte',
  users: 'Usuarios',
  configuration: 'Configuración',
  assignments: 'Asignaciones',
  manageGtfs: 'Gestionar GTFSs',
  manageGps: 'Gestionar conexiones GPS',
  parameterizations: 'Parametrizaciones',
  exports: 'Exportaciones',
};

const t = (input: string) => {
  const key = input.split('.')[1];

  return sidebar[key];
};

function Item(item: MenuItem) {
  return <ItemTemplate {...item} />;
}

export const model = [
  {
    id: 'control-operacional-1',
    label: t('sidebar.operationalControl'),
    expanded: true,
    items: [
      {
        id: 'operational-control-1',
        label: t('sidebar.operationalControl'),
        icon: 'list-settings-line',
        active: true,
        template: (item: MenuItem) => (
          <ItemTemplate
            {...item}
            wrapperComponent={<a title="Custom Wrapper" href="#some-url" />}
          />
        ),
      },
      {
        id: 'synoptic-1',
        label: t('sidebar.synoptic'),
        icon: 'map-2-line',
        template: Item,
      },
    ],
  },
  {
    id: 'historical-analytics-1',
    label: t('sidebar.historicalAnalytics'),
    expanded: true,
    items: [
      {
        id: 'dashboard-1',
        label: t('sidebar.dashboard'),
        icon: 'bar-chart-2-line',
        template: Item,
      },
      {
        id: 'punctuality-1',
        label: t('sidebar.punctuality'),
        icon: <i className="ri-time-line ri-lg text-inherit mr-1" />,
        items: [
          {
            id: 'stops-and-expeditions-1',
            label: t('sidebar.stopsAndExpeditions'),
          },
          {
            id: 'theoretical-real-time-1',
            label: t('sidebar.theoreticalRealTime'),
          },
          {
            id: 'lines-1',
            label: t('sidebar.lines'),
          },
          {
            id: 'stops-1',
            label: t('sidebar.stops'),
          },
          {
            id: 'drivers-1',
            label: t('sidebar.drivers'),
          },
        ],
      },
      {
        id: 'operational-reports-1',
        label: t('sidebar.operationalReports'),
        icon: <i className="ri-archive-line ri-lg text-inherit mr-1" />,
        items: [
          {
            id: 'driver-time-1',
            label: t('sidebar.driverTime'),
          },
          {
            id: 'time-by-line-1',
            label: t('sidebar.timebyLine'),
          },
          {
            id: 'kilometers-traveled-1',
            label: t('sidebar.kilometersTraveled'),
          },
        ],
      },
      {
        id: 'vehicle-tracking-1',
        label: t('sidebar.vehicleTracking'),
        icon: 'bus-line',
        template: Item,
      },
    ],
  },
  {
    id: 'avisos-1',
    label: t('sidebar.notifications'),
    expanded: true,
    items: [
      {
        id: 'notification-management-1',
        label: t('sidebar.notificationManagement'),
        icon: 'feedback-line',
        template: Item,
      },
    ],
  },
  {
    id: 'monitoring-1',
    label: t('sidebar.monitoring'),
    expanded: true,
    items: [
      {
        id: 'monitoring-1',
        label: t('sidebar.monitoring'),
        icon: 'computer-line',
        template: Item,
      },
      {
        id: 'estimation-accuracy-1',
        label: t('sidebar.estimationAccuracy'),
        icon: <i className="ri-error-warning-line ri-lg text-inherit mr-1" />,
        items: [
          {
            id: '2-minutes-1',
            label: `2 ${t('sidebar.minutes')}`,
          },
          {
            id: '5-minutes-1',
            label: `5 ${t('sidebar.minutes')}`,
          },
          {
            id: '10-minutes-1',
            label: `10 ${t('sidebar.minutes')}`,
          },
          {
            id: '30-minutes-1',
            label: `30 ${t('sidebar.minutes')}`,
          },
        ],
      },
    ],
  },
  {
    id: 'config-support-1',
    label: t('sidebar.configSupport'),
    expanded: true,
    items: [
      {
        id: 'sidebar-users',
        label: t('sidebar.users'),
        icon: 'group-line',
        section: '/user/list',
        template: Item,
      },
      {
        id: 'sidebar-configuration',
        label: t('sidebar.configuration'),
        icon: <i className="ri-settings-5-line ri-lg text-inherit mr-1" />,
        items: [
          {
            id: 'sidebar-configuration-assignments',
            label: t('sidebar.assignments'),
          },
          {
            id: 'sidebar-configuration-manageGtfs',
            label: t('sidebar.manageGtfs'),
          },
          {
            id: 'sidebar-configuration-manageGps',
            label: t('sidebar.manageGps'),
          },
          {
            id: 'sidebar-configuration-parameterizations',
            label: t('sidebar.parameterizations'),
          },
        ],
      },
      {
        id: 'sidebar-exports',
        label: t('sidebar.exports'),
        icon: 'download-2-line',
        template: Item,
      },
    ],
  },
] as unknown as MenuItem[];
