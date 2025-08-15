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
const Input = React.forwardRef(({ className, subLabel, iconPre, iconAfter, label, labelClassName, error, errorMessage, errorMessageClassName, wrapperClassName, inputWrapperClassName, btmSize = "sm", ...props }, ref) => {
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
    return ((0, jsx_runtime_1.jsxs)("div", { className: `gap-[6px] flex flex-col ${wrapperClassName}`, children: [label && ((0, jsx_runtime_1.jsx)("div", { className: `font-medium text-textSM text-gray-500 ${labelClassName}`, children: label })), (0, jsx_runtime_1.jsxs)("div", { className: `bg-transparent flex gap-2 justify-between items-center px-[12px] rounded-[6px] border border-gray-300 focus-within:border-primary-500 focus-within:shadow-[0_0_0_4px_#D7F4E7] ${isError &&
                    "border-red-500 focus-within:border-red-500 focus-within:shadow-[#FDE4E2]"} ${sizeClass} ${inputWrapperClassName}`, children: [iconPre, (0, jsx_runtime_1.jsx)("input", { className: `flex h-[24px] w-full text-textMD font-medium text-black bg-transparent focus:outline-none my-auto ring-offset-background file:bg-transparent file:text-sm file:font-semibold placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ${className}`, ref: ref, ...props }), iconAfter] }), errorMessage && ((0, jsx_runtime_1.jsx)("div", { className: `font-normal text-textXS text-destructive-500 ${errorMessageClassName}`, children: errorMessage })), subLabel && ((0, jsx_runtime_1.jsx)("div", { className: "font-normal text-textXS text-gray-700", children: subLabel }))] }));
});
Input.displayName = "Input";
exports.default = Input;
