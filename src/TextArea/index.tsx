import * as React from "react";

import { cn } from "../lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  wrapperClassName?: string;
  label?: string;
  labelClassName?: string;
  error?: boolean;
  errorMessage?: string;
  errorMessageClassName?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      wrapperClassName,
      label,
      labelClassName,
      error,
      errorMessage,
      errorMessageClassName,
      className,
      ...props
    },
    ref
  ) => {
    const isError = error || errorMessage;

    return (
      <div className={`w-full flex flex-col gap-[6px] ${wrapperClassName}`}>
        {label && (
          <div
            className={`font-medium text-textSM text-gray-500 ${labelClassName}`}
          >
            {label}
          </div>
        )}
        <textarea
          className={cn(
            "flex w-full rounded-[8px] border border-neutral-300 bg-transparent px-3 py-2 text-textMD text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_4px_#D7F4E7]",
            isError &&
              "border-red-500 focus:border-red-500 focus:shadow-[#FDE4E2]",
            className
          )}
          ref={ref}
          {...props}
        />
        {errorMessage && (
          <div
            className={`font-normal text-textXS text-destructive-500 ${errorMessageClassName}`}
          >
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export default Textarea;
