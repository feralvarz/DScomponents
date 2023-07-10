import type { Ref } from 'react';
import { forwardRef } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import type { TextareaType } from '../../../../types';

/**
 * @deprecated use TextArea from components/TextArea/TextArea
 */
function Textarea(props: TextareaType, ref: Ref<HTMLTextAreaElement>) {
  const { id, label, theme = 'main', required } = props;

  return (
    <div className="form-control w-full max-w-xs" data-theme={theme}>
      <label className="label" htmlFor={id}>
        <p>
          {label} <span className="text-secondary">{required ? '*' : null}</span>
        </p>
      </label>
      <InputTextarea ref={ref} {...props} />
    </div>
  );
}

export default forwardRef<HTMLTextAreaElement, TextareaType>(Textarea);
