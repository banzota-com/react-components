"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Checkbox_1 = __importDefault(require("../Checkbox"));
const popover_1 = require("../ComboBox/components/popover");
const upperFirst_1 = __importDefault(require("lodash/upperFirst"));
const utils_1 = require("../lib/utils");
const lucide_react_1 = require("lucide-react");
const MultipleSelect = ({ data, onClear, onChange, selectedPrefix = "", defaultValue, placeholder, }) => {
    const [open, setOpen] = react_1.default.useState(false);
    const [listSelected, setListSelected] = react_1.default.useState([]);
    let selectPlaceholder = defaultValue ?? placeholder ?? "All value";
    if (listSelected.length > 0) {
        // Upper first letter of the first selected item
        const transformSelectedText = (0, upperFirst_1.default)(listSelected[0].altLabel?.toLowerCase());
        // Add the number of selected items to the placeholder
        const additionFilterText = listSelected.length > 1 ? `(+${listSelected.length - 1})` : "";
        selectPlaceholder = `${selectedPrefix && `${selectedPrefix}: `}${transformSelectedText} ${additionFilterText}`;
    }
    const handleSelect = (item) => {
        const { value, label } = item;
        if (listSelected.find((select) => select.value === value)) {
            const selectedItems = listSelected.filter((select) => select.value !== value && select.label !== label);
            setListSelected(selectedItems);
            onChange?.(selectedItems);
        }
        else {
            const selectedItems = [...listSelected, item];
            setListSelected(selectedItems);
            onChange?.(selectedItems);
        }
    };
    const handleClearSelected = () => {
        onClear?.();
        setListSelected([]);
    };
    return ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, className: (0, utils_1.cn)("flex w-fit items-center justify-center rounded-[6px] cursor-pointer border border-gray-300 p-0", open && "border border-primary shadow-[0_0_0_3px] shadow-[#D7F4E7]"), children: (0, jsx_runtime_1.jsxs)("div", { className: "px-[12px] py-[8px] flex items-center justify-center gap-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-textMD font-medium text-neutral-900", children: selectPlaceholder }), (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDownIcon, { size: 20, className: (0, utils_1.cn)("transition-transform", open && "rotate-180") })] }) }), (0, jsx_runtime_1.jsxs)(popover_1.PopoverContent, { className: "w-full min-w-[200px] bg-white px-0 pb-0", children: [(0, jsx_runtime_1.jsx)("div", { className: "max-h-96 overflow-y-auto", children: react_1.default.Children.toArray(data.map((item) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { className: "px-3 text-textSM text-gray-400", children: item.name }), item.value.map((i) => ((0, jsx_runtime_1.jsxs)("div", { className: "line-clamp-1 flex w-full cursor-pointer flex-row items-center gap-3 text-ellipsis py-2.5 pl-4 pr-3 text-textSM text-gray-900 hover:bg-gray-50", onClick: () => handleSelect(i), children: [(0, jsx_runtime_1.jsx)(Checkbox_1.default, { checked: !!listSelected?.find((select) => select.value === i.value) }), (0, jsx_runtime_1.jsx)("span", { children: i.label })] })))] })))) }), (0, jsx_runtime_1.jsx)("div", { className: "h-full w-full cursor-pointer border-t border-t-gray-400 p-3 text-textSM text-gray-900 hover:bg-gray-50 ", onClick: handleClearSelected, children: "Clear selection" })] })] }));
};
exports.default = MultipleSelect;
