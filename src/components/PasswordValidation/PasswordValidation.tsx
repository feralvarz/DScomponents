import { memo } from 'react';

import type { PasswordValidationProps } from './PasswordValidation.types';
import { getClassName, getIconClass, getMessageClass } from './PasswordValidation.styles';
import { Text } from '../Text/Text';

/**
 * Password validation Component.
 */
export const PasswordValidation = memo(function PasswordValidation(props: PasswordValidationProps) {
  const { title, messages = [], className = '' } = props;

  return (
    <div className={getClassName(className)}>
      <Text variant="base" as="h3" className="mb-2">
        {title}
      </Text>
      {messages.length > 0 && (
        <ul>
          {messages.map((message, index) => (
            <li key={`validation-msg-${index}`} className={getMessageClass(message)}>
              <i className={getIconClass(message)} />
              {message.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
