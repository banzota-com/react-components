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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const select_1 = require("./components/select");
const __1 = require("..");
function Select(props) {
    const { data, placeholder, width, icon, label, onSelected, defaultValue, size, disable, value, } = props;
    const [open, setOpen] = React.useState(false);
    return ((0, jsx_runtime_1.jsxs)(select_1.Select, { disabled: disable, onOpenChange: (e) => setOpen(e), onValueChange: onSelected, defaultValue: defaultValue, open: open, value: value, children: [label && ((0, jsx_runtime_1.jsx)("div", { className: "mb-[6px]", children: (0, jsx_runtime_1.jsx)(__1.Label, { content: label, size: "textSM", fontWeight: "medium", className: "text-gray-500" }) })), (0, jsx_runtime_1.jsxs)(select_1.SelectTrigger, { className: `${width} ${size === "xs" ? "h-10" : size === "md" ? "h-12" : "h-10"} border-gray-300 py-2 border-[1px] border-solid rounded-[8px] gap-[8px] flex justify-start focus:outline-none ${open ? "shadow-[#D7F4E7] shadow-[0_0_0_4px]" : ""}`, children: [icon, (0, jsx_runtime_1.jsx)("div", { className: "w-full flex flex-row justify-between text-[14px]", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: placeholder ?? "" }) })] }), (0, jsx_runtime_1.jsx)(select_1.SelectContent, { className: "max-h-96 overflow-y-auto", style: { zIndex: 10000 }, children: (0, jsx_runtime_1.jsx)(select_1.SelectGroup, { children: data.map((item) => ((0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: item.value, children: item.label }, item.value))) }) })] }));
}
exports.default = Select;
__exportStar(require("./components/select"), exports);
