import React, { useEffect } from "react";

import { Checkbox, Input } from "../";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ComboBox/components/popover";

type Option = {
  value: string;
  label: string;
};

export default function MultiplechoiceSelect(props: {
  data: {
    name: string;
    value: {
      value: string;
      label: string | React.ReactNode;
      labelInitial?: string;
    }[];
  }[];
  placeholder?: string;
  width?: string;
  icon?: React.ReactNode;
  content?: string;
  onSelected?: (value: any) => void;
  optionTop: string[];
  onCheckedChange?: (value: boolean) => void;
  onClear?: () => void;
  listSelected?: string[];
  callbackListSelected?: (value: string[]) => void;
  defaultValue?: string;
  callbackAllSelected?: (value: Option[]) => void;
  classMain?: string;
  classInput?: string;
  showClearSelection?: boolean;
}) {
  const {
    data,
    optionTop,
    width,
    onCheckedChange,
    onClear,
    callbackListSelected,
    content,
    defaultValue,
    callbackAllSelected,
  } = props;
  const [value, setValue] = React.useState<string>(defaultValue ?? "All value");
  const [open, setOpen] = React.useState<boolean>(false);
  const [allSelected, setAllSelected] = React.useState<string[]>([]);
  const [listSelected, setListSelected] = React.useState<Option[]>([]);

  useEffect(() => {
    if (allSelected.length === 0) {
      setValue(defaultValue ?? "All value");
    } else if (allSelected.length === 1) {
      setValue(`${content}: ${allSelected[0]}`);
    } else {
      setValue(
        `${content}: ${allSelected[0] + " (" + (allSelected.length - 1)}+)`
      );
    }
    callbackListSelected && callbackListSelected(allSelected);
  }, [allSelected]);

  useEffect(() => {
    callbackAllSelected && callbackAllSelected(listSelected);
  }, [listSelected]);

  return (
    <div className={width}>
      <Popover open={open} onOpenChange={(e) => setOpen(e)}>
        <PopoverTrigger
          asChild
          onClick={() => setOpen(true)}
          className={`flex justify-center items-center p-0 m-0 rounded-[6px] ${
            open ? "shadow-[#D7F4E7] shadow-[0_0_0_3px]" : ""
          }`}
        >
          <div className="w-fit h-fit">
            <Input
              value={value}
              readOnly
              className={width}
              iconAfter={
                open ? (
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
                )
              }
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className={`px-0 pb-0 ${
            optionTop.length > 0 ? "pt-0" : "pt-4"
          } ${width} bg-white w-full min-w-[200px]`}
        >
          {optionTop?.length > 0 &&
            optionTop.map((item, index) => {
              return (
                <div
                  className="px-3 py-[10px] flex flex-row gap-3 text-textSM text-gray-900 items-center hover:bg-gray-50 cursor-pointer"
                  key={item + index}
                  onClick={() => {
                    if (allSelected.find((select) => select === item)) {
                      setAllSelected(
                        allSelected.filter((select) => select !== item)
                      );
                      onCheckedChange && onCheckedChange(false);
                    } else {
                      onCheckedChange && onCheckedChange(true);
                      setAllSelected([...allSelected, item]);
                    }
                  }}
                >
                  {onCheckedChange && (
                    <Checkbox
                      checked={!!allSelected?.find((select) => select === item)}
                      onCheckedChange={(e) => {
                        onCheckedChange(e as boolean);
                        if (e) {
                          setAllSelected([...allSelected, item]);
                        } else {
                          setAllSelected(
                            allSelected.filter((select) => select !== item)
                          );
                        }
                      }}
                    />
                  )}
                  {item}
                </div>
              );
            })}
          <div className="max-h-96 overflow-y-auto">
            {data.map((item, index) => (
              <div key={index + item.name}>
                <div className="text-textSM text-gray-400 px-3">
                  {item.name}
                </div>
                {item.value.map((i, index) => (
                  <div
                    className="pl-4 pr-3 py-[10px] flex flex-row gap-3 text-textSM text-gray-900 items-center hover:bg-gray-50 cursor-pointer"
                    key={i.value + index + item.name}
                    onClick={() => {
                      if (allSelected.find((select) => select === i.value)) {
                        setAllSelected(
                          allSelected.filter((select) => select !== i.value)
                        );
                        setListSelected(
                          listSelected.filter(
                            (select) =>
                              select.value !== i.value &&
                              select.label !== i.label
                          )
                        );
                      } else {
                        setAllSelected([...allSelected, i.value]);
                        setListSelected([
                          ...listSelected,
                          { value: i.value, label: item.name ?? "" },
                        ]);
                      }
                    }}
                  >
                    {onCheckedChange && (
                      <Checkbox
                        onCheckedChange={(e) => {
                          onCheckedChange(e as boolean);
                          if (e) {
                            setAllSelected([...allSelected, i.value]);
                          } else {
                            setAllSelected(
                              allSelected.filter((select) => select !== i.value)
                            );
                          }
                        }}
                        checked={
                          !!allSelected?.find((select) => select === i.value)
                        }
                      />
                    )}
                    <div className="text-ellipsis line-clamp-1">{i.label}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div
            className="w-full h-full p-3 text-textSM text-gray-900 hover:bg-gray-50 border-t-[1px] border-t-gray-400 cursor-pointer "
            onClick={() => {
              onClear && onClear();
              setAllSelected([]);
              setListSelected([]);
              // setOpen(false);
            }}
          >
            Clear selection
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
