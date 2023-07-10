import ctl from '@netlify/classnames-template-literals';

export const collapseStyles = (collapsed: boolean) =>
  ctl(`
  bg-ds-base
  relative
  flex-none
  duration-300
  ${collapsed ? 'w-8' : 'w-64'}
`);

export const arrowCollapseStyles = (collapsed: boolean) =>
  ctl(`
  text-h3
  ri-arrow-left-s-line
  ${collapsed && 'rotate-180'}
`);

export const getClassName = (className?: string) =>
  ctl(`
  ${className}
`);

export const collapseButton = ctl(`
  absolute
  top-6
  -right-4
  z-10
  rounded-full
  bg-ds-neutral
  text-white
  w-6
  h-6
  text-center
  flex
  place-content-center
  items-center
`);
