export type Message = {
  text: string;
  isValid: boolean;
};

export type PasswordValidationProps = {
  className?: string;
  title: string;
  messages: Message[];
};
