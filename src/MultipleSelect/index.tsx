import React from "react";

import Checkbox from "../Checkbox";
import Input from "../Input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ComboBox/components/popover";
import upperFirst from "lodash/upperFirst";
import { cn } from "../lib/utils";
import { ChevronDownIcon } from "lucide-react";

export type SelectOption = {
  value: string;
  label: string | React.ReactNode;
  altLabel?: string;
};

type MultipleSelectProps = {
  data: {
    name: string;
    value: SelectOption[];
  }[];
  placeholder?: string;
  selectedPrefix?: string;
  onClear?: () => void;
  onChange?: (value: SelectOption[]) => void;
  defaultValue?: string;
};

const MultipleSelect: React.FC<MultipleSelectProps> = ({
  data,
  onClear,
  onChange,
  selectedPrefix = "",
  defaultValue,
  placeholder,
}) => {
  const [open, setOpen] = React.useState(false);
  const [listSelected, setListSelected] = React.useState<SelectOption[]>([]);

  let selectPlaceholder = defaultValue ?? placeholder ?? "All value";

  if (listSelected.length > 0) {
    // Upper first letter of the first selected item
    const transformSelectedText = upperFirst(
      listSelected[0].altLabel?.toLowerCase()
    );

    // Add the number of selected items to the placeholder
    const additionFilterText =
      listSelected.length > 1 ? `(+${listSelected.length - 1})` : "";

    selectPlaceholder = `${
      selectedPrefix && `${selectedPrefix}: `
    }${transformSelectedText} ${additionFilterText}`;
  }

  const handleSelect = (item: SelectOption) => {
    const { value, label } = item;
    if (listSelected.find((select) => select.value === value)) {
      const selectedItems = listSelected.filter(
        (select) => select.value !== value && select.label !== label
      );

      setListSelected(selectedItems);
      onChange?.(selectedItems);
    } else {
      const selectedItems = [...listSelected, item];

      setListSelected(selectedItems);
      onChange?.(selectedItems);
    }
  };

  const handleClearSelected = () => {
    onClear?.();
    setListSelected([]);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        className={cn(
          "flex w-fit items-center justify-center rounded-[6px] cursor-pointer border border-gray-300 p-0",
          open && "border border-primary shadow-[0_0_0_3px] shadow-[#D7F4E7]"
        )}
      >
        <div className="px-[12px] py-[8px] flex items-center justify-center gap-2">
          <span className="text-textMD font-medium text-neutral-900">
            {selectPlaceholder}
          </span>
          <ChevronDownIcon
            size={20}
            className={cn("transition-transform", open && "rotate-180")}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full min-w-[200px] bg-white px-0 pb-0">
        <div className="max-h-96 overflow-y-auto">
          {React.Children.toArray(
            data.map((item) => (
              <div>
                <h4 className="px-3 text-textSM text-gray-400">{item.name}</h4>
                {item.value.map((i) => (
                  <div
                    className="line-clamp-1 flex w-full cursor-pointer flex-row items-center gap-3 text-ellipsis py-2.5 pl-4 pr-3 text-textSM text-gray-900 hover:bg-gray-50"
                    onClick={() => handleSelect(i)}
                  >
                    <Checkbox
                      checked={
                        !!listSelected?.find(
                          (select) => select.value === i.value
                        )
                      }
                    />
                    <span>{i.label}</span>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
        <div
          className="h-full w-full cursor-pointer border-t border-t-gray-400 p-3 text-textSM text-gray-900 hover:bg-gray-50 "
          onClick={handleClearSelected}
        >
          Clear selection
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MultipleSelect;
