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
        blue: "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 border-primary-500 focus:shadow-[#DBDDFF] text-white focus:shadow-[0_0_0_4px]",
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
        sm: "h-9 rounded-[6px] py-[8px] px-[10px] text-[14px] leading-[20px]",
        md: "h-[42px] rounded-[6px] py-[11px] px-[12px] text-[16px] leading-[24px]",
        lg: "h-12 rounded-[7px] py-[14px] px-[18px] text-[16px] leading-[24px]",
        xl: "h-[54px] rounded-[8px] py-[17px] px-[20px] text-[18px] leading-[28px]",
        "2xl": "h-13 rounded-[10px] py-[19px] px-[24px] text-[20px] leading-[30px]",
    },
};
const variantsSecondary = {
    ...variantsPrimary,
    color: {
        blue: "bg-primary-25 hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 text-primary-500 border border-solid focus:shadow-[0_0_0_4px]",
        destructive: "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500 border border-solid focus:shadow-[0_0_0_4px]",
        gray: "bg-inherit hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black border border-solid focus:shadow-[0_0_0_4px]",
    },
};
const variantsTertiary = {
    ...variantsPrimary,
    color: {
        blue: "bg-inherit hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 text-primary-500 ",
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
const buttonVariantsPrimary = (0, class_variance_authority_1.cva)("inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: variantsPrimary,
});
const buttonVariantsSeCondary = (0, class_variance_authority_1.cva)("inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: variantsSecondary,
});
const buttonVariantsTertiary = (0, class_variance_authority_1.cva)("inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: variantsTertiary,
});
const buttonVariantsLink = (0, class_variance_authority_1.cva)("inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: variantsLink,
});
const Button = React.forwardRef(({ color, role, size, hierarchy, content, disabled, onClick, className, loading, ...props }, ref) => {
    const Comp = "button";
    return ((0, jsx_runtime_1.jsx)(Comp, { role: role, disabled: disabled || loading, onClick: onClick, className: (0, utils_1.cn)(`${className} , relative`, hierarchy === "primary"
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
                    })), ref: ref, ...props, children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: loading ? "opacity-0" : "", children: content }), (0, jsx_runtime_1.jsx)("span", { className: `loading loading-spinner text-neutral absolute bottom-1/2 translate-x-1/2 translate-y-1/2 right-1/2 ${!loading ? "opacity-0" : ""}` })] }) }));
});
Button.displayName = "Button";
exports.default = Button;
