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
const react_1 = __importStar(require("react"));
const __1 = require("../");
const popover_1 = require("../ComboBox/components/popover");
function MultiplechoiceSelect(props) {
    const { data, optionTop, width, onCheckedChange, onClear, callbackListSelected, content, defaultValue, callbackAllSelected, } = props;
    const [value, setValue] = react_1.default.useState(defaultValue ?? "All value");
    const [open, setOpen] = react_1.default.useState(false);
    const [allSelected, setAllSelected] = react_1.default.useState([]);
    const [listSelected, setListSelected] = react_1.default.useState([]);
    (0, react_1.useEffect)(() => {
        if (allSelected.length === 0) {
            setValue(defaultValue ?? "All value");
        }
        else if (allSelected.length === 1) {
            setValue(`${content}: ${allSelected[0]}`);
        }
        else {
            setValue(`${content}: ${allSelected[0] + " (" + (allSelected.length - 1)}+)`);
        }
        callbackListSelected && callbackListSelected(allSelected);
    }, [allSelected]);
    (0, react_1.useEffect)(() => {
        callbackAllSelected && callbackAllSelected(listSelected);
    }, [listSelected]);
    return ((0, jsx_runtime_1.jsx)("div", { className: width, children: (0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: (e) => setOpen(e), children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, onClick: () => setOpen(true), className: `flex justify-center items-center p-0 m-0 rounded-[6px] ${open ? "shadow-[#D7F4E7] shadow-[0_0_0_3px]" : ""}`, children: (0, jsx_runtime_1.jsx)("div", { className: "w-fit h-fit", children: (0, jsx_runtime_1.jsx)(__1.Input, { value: value, readOnly: true, className: width, iconAfter: open ? ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.41205 6.91205C9.73748 6.58661 10.2651 6.58661 10.5906 6.91205L15.5906 11.912C15.916 12.2375 15.916 12.7651 15.5906 13.0906C15.2651 13.416 14.7375 13.416 14.412 13.0906L10.0013 8.67981L5.59056 13.0906C5.26512 13.416 4.73748 13.416 4.41205 13.0906C4.08661 12.7651 4.08661 12.2375 4.41205 11.912L9.41205 6.91205Z", fill: "#354053" }) })) : ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.41205 6.91205C4.73748 6.58661 5.26512 6.58661 5.59056 6.91205L10.0013 11.3228L14.412 6.91205C14.7375 6.58661 15.2651 6.58661 15.5906 6.91205C15.916 7.23748 15.916 7.76512 15.5906 8.09056L10.5906 13.0906C10.2651 13.416 9.73748 13.416 9.41205 13.0906L4.41205 8.09056C4.08661 7.76512 4.08661 7.23748 4.41205 6.91205Z", fill: "#354053" }) })) }) }) }), (0, jsx_runtime_1.jsxs)(popover_1.PopoverContent, { className: `px-0 pb-0 ${optionTop.length > 0 ? "pt-0" : "pt-4"} ${width} bg-white w-full min-w-[200px]`, children: [optionTop?.length > 0 &&
                            optionTop.map((item, index) => {
                                return ((0, jsx_runtime_1.jsxs)("div", { className: "px-3 py-[10px] flex flex-row gap-3 text-textSM text-gray-900 items-center hover:bg-gray-50 cursor-pointer", onClick: () => {
                                        if (allSelected.find((select) => select === item)) {
                                            setAllSelected(allSelected.filter((select) => select !== item));
                                            onCheckedChange && onCheckedChange(false);
                                        }
                                        else {
                                            onCheckedChange && onCheckedChange(true);
                                            setAllSelected([...allSelected, item]);
                                        }
                                    }, children: [onCheckedChange && ((0, jsx_runtime_1.jsx)(__1.Checkbox, { checked: !!allSelected?.find((select) => select === item), onCheckedChange: (e) => {
                                                onCheckedChange(e);
                                                if (e) {
                                                    setAllSelected([...allSelected, item]);
                                                }
                                                else {
                                                    setAllSelected(allSelected.filter((select) => select !== item));
                                                }
                                            } })), item] }, item + index));
                            }), (0, jsx_runtime_1.jsx)("div", { className: "max-h-96 overflow-y-auto", children: data.map((item, index) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "text-textSM text-gray-400 px-3", children: item.name }), item.value.map((i, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "pl-4 pr-3 py-[10px] flex flex-row gap-3 text-textSM text-gray-900 items-center hover:bg-gray-50 cursor-pointer", onClick: () => {
                                            if (allSelected.find((select) => select === i.value)) {
                                                setAllSelected(allSelected.filter((select) => select !== i.value));
                                                setListSelected(listSelected.filter((select) => select.value !== i.value &&
                                                    select.label !== i.label));
                                            }
                                            else {
                                                setAllSelected([...allSelected, i.value]);
                                                setListSelected([
                                                    ...listSelected,
                                                    { value: i.value, label: item.name ?? "" },
                                                ]);
                                            }
                                        }, children: [onCheckedChange && ((0, jsx_runtime_1.jsx)(__1.Checkbox, { onCheckedChange: (e) => {
                                                    onCheckedChange(e);
                                                    if (e) {
                                                        setAllSelected([...allSelected, i.value]);
                                                    }
                                                    else {
                                                        setAllSelected(allSelected.filter((select) => select !== i.value));
                                                    }
                                                }, checked: !!allSelected?.find((select) => select === i.value) })), (0, jsx_runtime_1.jsx)("div", { className: "text-ellipsis line-clamp-1", children: i.label })] }, i.value + index + item.name)))] }, index + item.name))) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full h-full p-3 text-textSM text-gray-900 hover:bg-gray-50 border-t-[1px] border-t-gray-400 cursor-pointer ", onClick: () => {
                                onClear && onClear();
                                setAllSelected([]);
                                setListSelected([]);
                                // setOpen(false);
                            }, children: "Clear selection" })] })] }) }));
}
exports.default = MultiplechoiceSelect;
