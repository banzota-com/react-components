import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  subLabel?: string;
  iconPre?: React.ReactNode;
  iconAfter?: React.ReactNode;
  label?: string;
  labelClassName?: string;
  error?: boolean;
  errorMessage?: string;
  errorMessageClassName?: string;
  wrapperClassName?: string;
  inputWrapperClassName?: string;
  btmSize?: "sm" | "md" | "lg";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      subLabel,
      iconPre,
      iconAfter,
      label,
      labelClassName,
      error,
      errorMessage,
      errorMessageClassName,
      wrapperClassName,
      inputWrapperClassName,
      btmSize = "sm",
      ...props
    },
    ref
  ) => {
    const isError = error || errorMessage;
    let sizeClass = "py-[7px]";
    switch (btmSize) {
      case "sm":
        sizeClass = "py-[7px]";
        break;
      case "md":
        sizeClass = "py-[9px]";
        break;
      case "lg":
        sizeClass = "py-[11px]";
        break;
      default:
        sizeClass = "py-[7px]";
        break;
    }
    return (
      <div className={`gap-[6px] flex flex-col ${wrapperClassName}`}>
        {label && (
          <div
            className={`font-medium text-textSM text-gray-500 ${labelClassName}`}
          >
            {label}
          </div>
        )}
        <div
          className={`bg-transparent flex gap-2 justify-between items-center px-[12px] rounded-[6px] border border-gray-300 focus-within:border-primary-500 focus-within:shadow-[0_0_0_4px_#D7F4E7] ${
            isError &&
            "border-red-500 focus-within:border-red-500 focus-within:shadow-[#FDE4E2]"
          } ${sizeClass} ${inputWrapperClassName}`}
        >
          {iconPre}
          <input
            className={`flex h-[24px] w-full text-textMD font-medium text-black bg-transparent focus:outline-none my-auto ring-offset-background file:bg-transparent file:text-sm file:font-semibold placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            ref={ref}
            {...props}
          />
          {iconAfter}
        </div>
        {errorMessage && (
          <div
            className={`font-normal text-textXS text-destructive-500 ${errorMessageClassName}`}
          >
            {errorMessage}
          </div>
        )}
        {subLabel && (
          <div className="font-normal text-textXS text-gray-700">
            {subLabel}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
