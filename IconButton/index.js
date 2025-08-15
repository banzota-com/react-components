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
const variantsPrimary = {
    color: {
        blue: "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 border-primary-500 focus:shadow-[#D7F4E7] text-white focus:shadow-[0_0_0_4px]",
        destructive: "bg-destructive-500 hover:bg-destructive-600 active:bg-destructive-700 border-destructive-400 focus:shadow-[#FDE4F2] text-white focus:shadow-[0_0_0_4px]",
        gray: "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 border-gray-500 focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
    },
    hierarchy: {
        primary: "",
        secondary: "",
        tertiary: "",
        link: "",
    },
    size: {
        xs: "h-[24px] w-[24px] rounded-[6px]",
        sm: "h-[36px] w-[36px] rounded-[6px]",
        md: "h-[40px] w-[40px] rounded-[7px]",
        lg: "h-[44px] w-[44px] rounded-[8px]",
        xl: "h-[48px] w-[48px] rounded-[10px]",
        "2xl": "h-[56px] w-[56px] rounded-[10px]",
    },
};
const variantsSecondary = {
    ...variantsPrimary,
    color: {
        blue: "bg-primary-25 hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#D7F4E7] border-primary-500 text-primary-500 border border-solid focus:shadow-[0_0_0_4px]",
        destructive: "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500 border border-solid focus:shadow-[0_0_0_4px]",
        gray: "bg-inherit hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black border border-solid focus:shadow-[0_0_0_4px]",
    },
};
const variantsTertiary = {
    ...variantsPrimary,
    color: {
        blue: "bg-inherit hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#D7F4E7] border-primary-500 text-primary-500 ",
        destructive: "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500",
        gray: "bg-inherit hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black",
    },
};
const variantsLink = {
    ...variantsPrimary,
    color: {
        blue: "bg-inherit text-primary-500 hover:text-primary-700 active:text-primary-700 underline-offset-4 hover:underline",
        destructive: "bg-inherit text-destructive-500 hover:text-destructive-600 active:text-destructive-700 underline-offset-4 hover:underline",
        gray: "bg-inherit hover:text-gray-950 active:text-gray-950 text-gray-700 underline-offset-4 hover:underline",
    },
};
const buttonVariantsPrimary = (0, class_variance_authority_1.cva)("flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: variantsPrimary,
});
const buttonVariantsSeCondary = (0, class_variance_authority_1.cva)("flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: variantsSecondary,
});
const buttonVariantsTetryary = (0, class_variance_authority_1.cva)("flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: variantsTertiary,
});
const buttonVariantsLink = (0, class_variance_authority_1.cva)("flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: variantsLink,
});
const IconButton = React.forwardRef(({ color, size, hierarchy: hierarchy, content, className, disabled, onClick, roundedFull, loading, ...props }, ref) => {
    const Comp = "button";
    return ((0, jsx_runtime_1.jsxs)(Comp, { style: {
            borderRadius: roundedFull ? "50%" : "",
        }, disabled: disabled || loading, onClick: onClick, className: (0, utils_1.cn)(`relative ${className}`, hierarchy === "primary"
            ? buttonVariantsPrimary({
                color,
                size,
                hierarchy: hierarchy,
            })
            : hierarchy === "secondary"
                ? buttonVariantsSeCondary({
                    color,
                    size,
                    hierarchy: hierarchy,
                })
                : hierarchy === "tertiary"
                    ? buttonVariantsTetryary({
                        color,
                        size,
                        hierarchy: hierarchy,
                    })
                    : buttonVariantsLink({
                        color,
                        size,
                        hierarchy: hierarchy,
                    })), ref: ref, ...props, children: [(0, jsx_runtime_1.jsx)("div", { className: loading ? "opacity-0" : "", children: content }), (0, jsx_runtime_1.jsx)("span", { className: `loading loading-spinner text-neutral absolute bottom-1/2 translate-x-1/2 translate-y-1/2 right-1/2 ${!loading ? "opacity-0" : ""}` })] }));
});
IconButton.displayName = "IconButton";
exports.default = IconButton;
