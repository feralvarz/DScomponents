import ctl from '@netlify/classnames-template-literals';
export const getClassName = (className?: string) =>
  ctl(`
  flex
  flex-col
  ${className}
`);
