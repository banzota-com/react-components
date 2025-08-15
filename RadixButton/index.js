"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("../lib/utils");
const react_slot_1 = require("@radix-ui/react-slot");
const COMMON_STYLE = "relative inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
const buttonSizeVariant = {
    sm: "h-[36px] rounded-[6px] py-[8px] px-[10px] text-[14px] leading-[20px]",
    md: "h-[40px] rounded-[6px] py-[11px] px-[12px] text-[16px] leading-[24px]",
    lg: "h-[44px] rounded-[7px] py-[14px] px-[18px] text-[16px] leading-[24px]",
    xl: "h-[48px] rounded-[8px] py-[17px] px-[20px] text-[18px] leading-[28px]",
    "2xl": "h-[56px] rounded-[10px] py-[19px] px-[24px] text-[20px] leading-[30px]",
};
const variantsPrimary = {
    color: {
        blue: "bg-gradient-to-br from-[#1B8068] to-[#1B8068] hover:bg-gradient-to-tl transition duration-200 active:bg-primary-700 border-primary-500 focus:shadow-[#D7F4E7] text-white focus:shadow-[0_0_0_4px]",
        destructive: "bg-destructive-500 hover:bg-destructive-600 active:bg-destructive-700 border-destructive-400 focus:shadow-[#FDE4F2] text-white focus:shadow-[0_0_0_4px]",
        gray: "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 border-gray-500 focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
    },
    size: buttonSizeVariant,
};
const variantsSecondary = {
    color: {
        blue: "bg-primary-25 hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#D7F4E7] border-primary-500 text-primary-500 border border-solid focus:shadow-[0_0_0_4px]",
        destructive: "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500 border border-solid focus:shadow-[0_0_0_4px]",
        gray: "bg-gray-200 hover:bg-gray-300 active:bg-gray-300 focus:bg-primary-100 text-black border border-solid active:bg-gray-400",
    },
    size: buttonSizeVariant,
};
const variantsTertiary = {
    color: {
        blue: "bg-inherit hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#D7F4E7] border-primary-500 text-primary-500 ",
        destructive: "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500",
        gray: "bg-inherit hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black",
    },
    size: buttonSizeVariant,
};
const variantsLink = {
    color: {
        blue: "bg-inherit text-primary-500 hover:text-primary-700 active:text-primary-700 underline-offset-4 hover:underline",
        destructive: "bg-inherit text-destructive-500 hover:text-destructive-600 active:text-destructive-700 underline-offset-4 hover:underline",
        gray: "bg-inherit hover:text-gray-950 active:text-gray-950 text-gray-700 underline-offset-4 hover:underline",
    },
    size: buttonSizeVariant,
};
const buttonVariantsPrimary = (0, class_variance_authority_1.cva)(COMMON_STYLE, {
    variants: variantsPrimary,
});
const buttonVariantsSeCondary = (0, class_variance_authority_1.cva)(COMMON_STYLE, {
    variants: variantsSecondary,
});
const buttonVariantsTertiary = (0, class_variance_authority_1.cva)(COMMON_STYLE, {
    variants: variantsTertiary,
});
const buttonVariantsLink = (0, class_variance_authority_1.cva)(COMMON_STYLE, {
    variants: variantsLink,
});
const RadixButton = React.forwardRef(({ color = "blue", size = "md", hierarchy = "primary", type = "button", children, disabled, className, isLoading, asChild, ...props }, ref) => {
    const Comp = asChild ? react_slot_1.Slot : "button";
    const buttonVariant = () => {
        switch (hierarchy) {
            case "primary":
                return buttonVariantsPrimary({
                    color,
                    size,
                    className,
                });
            case "secondary":
                return buttonVariantsSeCondary({
                    color,
                    size,
                    className,
                });
            case "tertiary":
                return buttonVariantsTertiary({
                    color,
                    size,
                    className,
                });
            case "link":
                return buttonVariantsLink({
                    color,
                    size,
                    className,
                });
            default:
                return buttonVariantsPrimary({
                    color,
                    size,
                    className,
                });
        }
    };
    return ((0, jsx_runtime_1.jsx)(Comp, { disabled: disabled || isLoading, className: (0, utils_1.cn)(buttonVariant()), type: type, ref: ref, ...props, children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)({ "opacity-0": isLoading }), children: children }), isLoading && ((0, jsx_runtime_1.jsx)("span", { className: (0, utils_1.cn)("loading loading-spinner text-neutral absolute bottom-1/2 translate-x-1/2 translate-y-1/2 right-1/2") }))] }) }));
});
RadixButton.displayName = "RadixButton";
exports.default = RadixButton;
