"use strict";
"use client";
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
const react_icons_1 = require("@radix-ui/react-icons");
const React = __importStar(require("react"));
const utils_1 = require("../lib/utils");
const command_1 = require("../ComboBox/components/command");
const popover_1 = require("../ComboBox/components/popover");
function ComboboxDemo(props) {
    const { data, placeholder, onSelect, DeleteContent, onDelete, value, setValue, width, content, } = props;
    const [open, setOpen] = React.useState(false);
    const [idsSelected, setIdsSelected] = React.useState("");
    return ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, className: "border-gray-300", children: (0, jsx_runtime_1.jsxs)("div", { style: { borderRadius: "6px" }, className: `text-textMD h-10 flex border-gray-300 items-center justify-between w-full px-3 py-[10px] border-[1px] rounded-[6px]${data.find((item) => item.value === value)?.label
                        ? "text-gray-900"
                        : "text-gray-500"} ${open
                        ? "border-primary-500 shadow-[0_0_0_4px] shadow-[#D7F4E7]"
                        : "border-gray-300"}`, children: [(0, jsx_runtime_1.jsx)("div", { className: "mr-2", children: value !== "" ? `${content}: ${value}` : placeholder }), open ? ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.41205 6.91205C9.73748 6.58661 10.2651 6.58661 10.5906 6.91205L15.5906 11.912C15.916 12.2375 15.916 12.7651 15.5906 13.0906C15.2651 13.416 14.7375 13.416 14.412 13.0906L10.0013 8.67981L5.59056 13.0906C5.26512 13.416 4.73748 13.416 4.41205 13.0906C4.08661 12.7651 4.08661 12.2375 4.41205 11.912L9.41205 6.91205Z", fill: "#354053" }) })) : ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.41205 6.91205C4.73748 6.58661 5.26512 6.58661 5.59056 6.91205L10.0013 11.3228L14.412 6.91205C14.7375 6.58661 15.2651 6.58661 15.5906 6.91205C15.916 7.23748 15.916 7.76512 15.5906 8.09056L10.5906 13.0906C10.2651 13.416 9.73748 13.416 9.41205 13.0906L4.41205 8.09056C4.08661 7.76512 4.08661 7.23748 4.41205 6.91205Z", fill: "#354053" }) }))] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: `w-[${width}px] p-0`, children: (0, jsx_runtime_1.jsxs)(command_1.Command, { children: [(0, jsx_runtime_1.jsx)(command_1.CommandInput, { placeholder: placeholder }), (0, jsx_runtime_1.jsx)(command_1.CommandEmpty, { children: "Not found." }), (0, jsx_runtime_1.jsxs)(command_1.CommandGroup, { children: [(0, jsx_runtime_1.jsx)("div", { className: "h-fit max-h-[227px] overflow-y-auto", children: data.map((i) => ((0, jsx_runtime_1.jsxs)(command_1.CommandItem, { onSelect: (currentValue) => {
                                            setValue(currentValue);
                                            setOpen(false);
                                            onSelect && onSelect(i.value);
                                            setIdsSelected(i.value.toString());
                                        }, className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-ellipsis line-clamp-1", children: i.label }), (0, jsx_runtime_1.jsx)(react_icons_1.CheckIcon, { className: (0, utils_1.cn)("ml-auto h-5 w-5 text-primary-500", idsSelected === i.value.toString()
                                                    ? "opacity-100"
                                                    : "opacity-0") })] }, i.value))) }), value !== "" ? ((0, jsx_runtime_1.jsx)("div", { className: "pt-1 border-t-[1px] border-gray-300", children: (0, jsx_runtime_1.jsx)(command_1.CommandItem, { onSelect: () => {
                                            setValue("");
                                            setOpen(false);
                                            setIdsSelected("");
                                            onDelete && onDelete();
                                        }, children: DeleteContent ?? "Clear selection" }) })) : null] })] }) })] }));
}
exports.default = ComboboxDemo;
