import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const variantsPrimary = {
  color: {
    blue: "bg-gradient-to-br from-[#1B8068] to-[#1B8068] hover:bg-gradient-to-tl transition duration-200 active:bg-primary-700 border-primary-500 focus:shadow-[#D7F4E7] text-white focus:shadow-[0_0_0_4px]",
    destructive:
      "bg-destructive-500 hover:bg-destructive-600 active:bg-destructive-700 border-destructive-400 focus:shadow-[#FDE4F2] text-white focus:shadow-[0_0_0_4px]",

    gray: "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 border-gray-500 focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
  },
  hierarchy: {
    primary: "",
    secondary: "",
    tertiary: "",
    link: "",
  },
  size: {
    sm: "h-[36px] rounded-[6px] py-[8px] px-[10px] text-[14px] leading-[20px]",
    md: "h-[40px] rounded-[6px] py-[11px] px-[12px] text-[16px] leading-[24px]",
    lg: "h-[44px] rounded-[7px] py-[14px] px-[18px] text-[16px] leading-[24px]",
    xl: "h-[48px] rounded-[8px] py-[17px] px-[20px] text-[18px] leading-[28px]",
    "2xl":
      "h-[56px] rounded-[10px] py-[19px] px-[24px] text-[20px] leading-[30px]",
  },
};

const variantsSecondary = {
  ...variantsPrimary,
  color: {
    blue: "bg-primary-25 hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#D7F4E7] border-primary-500 text-primary-500 border border-solid focus:shadow-[0_0_0_4px]",
    destructive:
      "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500 border border-solid focus:shadow-[0_0_0_4px]",
    gray: "bg-gray-200 hover:bg-gray-300 active:bg-gray-300 focus:bg-primary-100 text-black border border-solid active:bg-gray-400",
  },
};

const variantsTertiary = {
  ...variantsPrimary,
  color: {
    blue: "bg-inherit hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#D7F4E7] border-primary-500 text-primary-500 ",
    destructive:
      "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500",
    gray: "bg-inherit hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black",
  },
};

const variantsLink = {
  ...variantsPrimary,
  color: {
    blue: "bg-inherit text-primary-500 hover:text-primary-700 active:text-primary-700 underline-offset-4 hover:underline",
    destructive:
      "bg-inherit text-destructive-500 hover:text-destructive-600 active:text-destructive-700 underline-offset-4 hover:underline",
    gray: "bg-inherit hover:text-gray-950 active:text-gray-950 text-gray-700 underline-offset-4 hover:underline",
  },
};

const buttonVariantsPrimary = cva(
  "inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: variantsPrimary,
  }
);
const buttonVariantsSeCondary = cva(
  "inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: variantsSecondary,
  }
);
const buttonVariantsTertiary = cva(
  "inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: variantsTertiary,
  }
);
const buttonVariantsLink = cva(
  "inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: variantsLink,
  }
);

export interface ButtonProps
  extends VariantProps<typeof buttonVariantsPrimary> {
  content?: string | React.ReactNode;
  disabled?: boolean;
  onClick?: any;
  className?: string;
  role?: string;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color,
      role,
      size,
      hierarchy,
      content,
      disabled,
      onClick,
      className,
      loading,
      ...props
    },
    ref
  ) => {
    const Comp = "button";

    return (
      <button
        role={role}
        disabled={disabled || loading}
        onClick={onClick}
        className={cn(
          `relative ${className}`,
          hierarchy === "primary"
            ? buttonVariantsPrimary({
                color,
                size,
                hierarchy,
              })
            : hierarchy === "secondary"
            ? buttonVariantsSeCondary({
                color,
                size,
                hierarchy,
              })
            : hierarchy === "tertiary"
            ? buttonVariantsTertiary({
                color,
                size,
              })
            : buttonVariantsLink({
                color,
                size,
                hierarchy,
              })
        )}
        ref={ref}
        {...props}
      >
        <div className={loading ? "opacity-0" : ""}>{content}</div>
        <span
          className={`loading loading-spinner text-neutral absolute bottom-1/2 translate-x-1/2 translate-y-1/2 right-1/2 ${
            !loading ? "opacity-0" : ""
          }`}
        ></span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
