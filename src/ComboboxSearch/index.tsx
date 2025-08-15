"use client";

import { CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { cn } from "../lib/utils";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ComboBox/components/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ComboBox/components/popover";

interface IComboboxProps {
  data: { value: string | number; label: string | React.ReactNode }[];
  placeholder?: string;
  onSelect?: (e: string | number) => void;
  DeleteContent?: string;
  content?: string;
  onDelete?: () => void;
  value: string | number;
  setValue: (e: string | number) => void;
  width?: number;
}

export default function ComboboxDemo(props: IComboboxProps) {
  const {
    data,
    placeholder,
    onSelect,
    DeleteContent,
    onDelete,
    value,
    setValue,
    width,
    content,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [idsSelected, setIdsSelected] = React.useState<string>("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="border-gray-300">
        <div
          style={{ borderRadius: "6px" }}
          className={`text-textMD h-10 flex border-gray-300 items-center justify-between w-full px-3 py-[10px] border-[1px] rounded-[6px]${
            data.find((item) => item.value === value)?.label
              ? "text-gray-900"
              : "text-gray-500"
          } ${
            open
              ? "border-primary-500 shadow-[0_0_0_4px] shadow-[#D7F4E7]"
              : "border-gray-300"
          }`}
        >
          <div className="mr-2">
            {value !== "" ? `${content}: ${value}` : placeholder}
          </div>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.41205 6.91205C9.73748 6.58661 10.2651 6.58661 10.5906 6.91205L15.5906 11.912C15.916 12.2375 15.916 12.7651 15.5906 13.0906C15.2651 13.416 14.7375 13.416 14.412 13.0906L10.0013 8.67981L5.59056 13.0906C5.26512 13.416 4.73748 13.416 4.41205 13.0906C4.08661 12.7651 4.08661 12.2375 4.41205 11.912L9.41205 6.91205Z"
                fill="#354053"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.41205 6.91205C4.73748 6.58661 5.26512 6.58661 5.59056 6.91205L10.0013 11.3228L14.412 6.91205C14.7375 6.58661 15.2651 6.58661 15.5906 6.91205C15.916 7.23748 15.916 7.76512 15.5906 8.09056L10.5906 13.0906C10.2651 13.416 9.73748 13.416 9.41205 13.0906L4.41205 8.09056C4.08661 7.76512 4.08661 7.23748 4.41205 6.91205Z"
                fill="#354053"
              />
            </svg>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className={`w-[${width}px] p-0`}>
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>Not found.</CommandEmpty>
          <CommandGroup>
            <div className="h-fit max-h-[227px] overflow-y-auto">
              {data.map((i) => (
                <CommandItem
                  key={i.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                    onSelect && onSelect(i.value);
                    setIdsSelected(i.value.toString());
                  }}
                  className="flex items-center justify-between"
                >
                  <div className="text-ellipsis line-clamp-1">{i.label}</div>
                  <CheckIcon
                    className={cn(
                      "ml-auto h-5 w-5 text-primary-500",
                      idsSelected === i.value.toString()
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </div>
            {value !== "" ? (
              <div className="pt-1 border-t-[1px] border-gray-300">
                <CommandItem
                  onSelect={() => {
                    setValue("");
                    setOpen(false);
                    setIdsSelected("");
                    onDelete && onDelete();
                  }}
                >
                  {DeleteContent ?? "Clear selection"}
                </CommandItem>
              </div>
            ) : null}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
