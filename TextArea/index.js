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
const utils_1 = require("../lib/utils");
const Textarea = React.forwardRef(({ wrapperClassName, label, labelClassName, error, errorMessage, errorMessageClassName, className, ...props }, ref) => {
    const isError = error || errorMessage;
    return ((0, jsx_runtime_1.jsxs)("div", { className: `w-full flex flex-col gap-[6px] ${wrapperClassName}`, children: [label && ((0, jsx_runtime_1.jsx)("div", { className: `font-medium text-textSM text-gray-500 ${labelClassName}`, children: label })), (0, jsx_runtime_1.jsx)("textarea", { className: (0, utils_1.cn)("flex w-full rounded-[8px] border border-neutral-300 bg-transparent px-3 py-2 text-textMD text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_4px_#D7F4E7]", isError &&
                    "border-red-500 focus:border-red-500 focus:shadow-[#FDE4E2]", className), ref: ref, ...props }), errorMessage && ((0, jsx_runtime_1.jsx)("div", { className: `font-normal text-textXS text-destructive-500 ${errorMessageClassName}`, children: errorMessage }))] }));
});
Textarea.displayName = "Textarea";
exports.default = Textarea;
