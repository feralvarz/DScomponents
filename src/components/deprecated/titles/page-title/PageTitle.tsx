import { FC } from 'react';

import TitleProps from 'src/types/components/page-title/PageTitleType';

const CLASSNAME_BUTTON_CONTAINER = 'flex flex-row gap-x-2';
const CLASSNAME_BUTTON = "flex font-['Open_Sans'] border-0 content-center gap-[7px]";

/**
 * @deprecated use Pagetitle from components/PageTitle/PageTitle
 */
const PageTitle: FC<TitleProps> = ({ label, actionsBottom, actionsTop }) => {
  const header = actionsTop && (
    <div className={CLASSNAME_BUTTON_CONTAINER}>
      {...actionsTop.map((button, index) => (
        <button
          key={`header-button-${index}`}
          className={`${CLASSNAME_BUTTON} text-sm text-[#848389]`}
          type="button"
          onClick={button.onClick}
        >
          {button.iconLeft}
          {button.label}
        </button>
      ))}
    </div>
  );
  const footer = actionsBottom && (
    <div className={`${CLASSNAME_BUTTON_CONTAINER} mt-1`}>
      {...actionsBottom.map((button) => (
        <button
          key={`footer-button-${button.label}`}
          className={`${CLASSNAME_BUTTON} text-base text-black`}
          type="button"
          onClick={button.onClick}
        >
          {button.iconLeft}
          {button.label}
        </button>
      ))}
    </div>
  );
  return (
    <div className="flex flex-col bg-inherit" data-theme="main">
      {header}
      <h2>{label}</h2>
      {footer}
    </div>
  );
};

export default PageTitle;
