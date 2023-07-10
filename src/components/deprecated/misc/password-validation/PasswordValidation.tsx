import { useEffect, useState } from 'react';
import type { PasswordValidationType, PasswordValidationItemType } from 'src/types';

/**
 * @deprecated use PasswordValidation from 'components/PasswordValidation/PasswordValidation'
 */
function PasswordValidation({
  items,
  value,
  callback,
  className,
  theme = 'main',
}: PasswordValidationType) {
  const [validOptions, setValidOptions] = useState<string[]>([]);

  useEffect(() => {
    const newValidOptions: string[] = [];
    items.forEach((item: PasswordValidationItemType) => {
      const regeExp = new RegExp(item.regex);
      if (regeExp.test(value)) newValidOptions.push(item.id);
    });
    setValidOptions(newValidOptions);
    callback(newValidOptions.length === items.length);
  }, [callback, items, value]);

  return (
    <div className={className} data-theme={theme}>
      {items.map((item: PasswordValidationItemType, index) => (
        <div
          key={`validator-${index}`}
          className={`flex flex-row gap-2 p-1 items-center text-left
          ${
            validOptions.includes(item.id)
              ? item.colorTextSuccess ?? 'text-success'
              : item.colorTextError ?? 'text-error'
          }`}
        >
          <i
            className={`${
              validOptions.includes(item.id) ? 'ri-checkbox-circle-line' : 'ri-close-circle-line'
            } ri-lg`}
          />
          <p className="text-sm">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default PasswordValidation;
