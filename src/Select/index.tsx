import * as React from "react";

import {
  SelectContent,
  Select as SelectData,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/select";

import { Label } from "..";

export default function Select(props: {
  data: { value: string; label: string | React.ReactNode }[];
  placeholder?: string;
  width?: string;
  icon?: React.ReactNode;
  label?: string;
  onSelected?: (value: string) => void;
  defaultValue?: string;
  size?: "xs" | "sm" | "md";
  disable?: boolean;
  value?: string;
}) {
  const {
    data,
    placeholder,
    width,
    icon,
    label,
    onSelected,
    defaultValue,
    size,
    disable,
    value,
  } = props;

  const [open, setOpen] = React.useState(false);

  return (
    <SelectData
      disabled={disable}
      onOpenChange={(e) => setOpen(e)}
      onValueChange={onSelected}
      defaultValue={defaultValue}
      open={open}
      value={value}
    >
      {label && (
        <div className="mb-[6px]">
          <Label
            content={label}
            size="textSM"
            fontWeight={"medium"}
            className="text-gray-500"
          />
        </div>
      )}
      <SelectTrigger
        className={`${width} ${
          size === "xs" ? "h-10" : size === "md" ? "h-12" : "h-10"
        } border-gray-300 py-2 border-[1px] border-solid rounded-[8px] gap-[8px] flex justify-start focus:outline-none ${
          open ? "shadow-[#D7F4E7] shadow-[0_0_0_4px]" : ""
        }`}
      >
        {icon}
        <div className="w-full flex flex-row justify-between text-[14px]">
          <SelectValue placeholder={placeholder ?? ""} />
        </div>
      </SelectTrigger>

      <SelectContent
        className="max-h-96 overflow-y-auto"
        style={{ zIndex: 10000 }}
      >
        <SelectGroup>
          {data.map((item) => (
            <SelectItem value={item.value} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectData>
  );
}

export * from "./components/select";
