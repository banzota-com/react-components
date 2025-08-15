"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { DateRange } from "react-day-picker";

import { cn } from "../lib/utils";

import moment from "moment-timezone";
import { Button } from "..";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ComboBox/components/popover";
import { Calendar } from "./components/calendar";

export enum RangeDatePickerDefaultValues {
  TODAY = "Today",
  THIS_WEEK = "This week",
  THIS_MONTH = "This month",
  THIS_YEAR = "This year",
  ALL_TIME = "All time",
}
interface IRangeDatePicker {
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  timezone?: string;
  defaultValues?: RangeDatePickerDefaultValues;
}

const generateDateRangeFromDefaultValue = (
  timezoneDate: string,
  defaultValue?: RangeDatePickerDefaultValues
): DateRange => {
  switch (defaultValue) {
    case RangeDatePickerDefaultValues.TODAY:
      return {
        from: new Date(
          moment().toDate().toLocaleString("en-US", { timeZone: timezoneDate })
        ),
        to: new Date(
          moment().toDate().toLocaleString("en-US", { timeZone: timezoneDate })
        ),
      };
    case RangeDatePickerDefaultValues.THIS_WEEK:
      return {
        from: moment().startOf("week").toDate(),
        to: moment().endOf("week").toDate(),
      };
    case RangeDatePickerDefaultValues.THIS_MONTH:
      return {
        from: moment(new Date()).startOf("month").toDate(),
        to: moment(new Date()).endOf("month").toDate(),
      };
    case RangeDatePickerDefaultValues.THIS_YEAR:
      return {
        from: moment(new Date()).startOf("year").toDate(),
        to: moment(new Date()).endOf("year").toDate(),
      };
    default:
      return {
        from: undefined,
        to: undefined,
      };
  }
};

export default function RangeDatePicker(props: IRangeDatePicker) {
  const { date, setDate, timezone, defaultValues } = props;
  const [firstLoad, setFirstLoad] = React.useState<boolean>(true);
  const timezoneDate = timezone ?? "America/Los_Angeles";
  // var moment = require("moment-timezone");
  // moment.tz.setDefault(timezoneDate);

  const [datePicker, setDatePicker] = React.useState<DateRange | undefined>(
    generateDateRangeFromDefaultValue(timezoneDate, defaultValues)
  );

  const [open, setOpen] = React.useState<boolean>(false);

  // const convertTimezone = (timezone: string) => {
  //   const date = new Intl.DateTimeFormat("en-GB", {
  //     dateStyle: "full",
  //     timeStyle: "long",
  //     timeZone: timezone,
  //   })
  //     .format(new Date(moment().tz(timezone).format()))
  //     .split(" ");
  //   return date[date.length - 1];
  // };

  const [valueSelected, setValueSelected] = React.useState<string>(
    defaultValues ?? ""
  );

  React.useEffect(() => {
    const dateRange = generateDateRangeFromDefaultValue(
      timezoneDate,
      defaultValues
    );
    setDatePicker(dateRange);
  }, [defaultValues]);

  React.useEffect(() => {
    if (firstLoad && !!defaultValues && !!datePicker?.from) {
      if (datePicker?.from && !datePicker?.to) {
        setDate({
          from: convertDate(datePicker?.from, "start"),
          to: convertDate(datePicker?.from, "end"),
        });
        setDatePicker({
          ...datePicker,
          to: datePicker?.from,
        });
      } else if (datePicker?.from && datePicker?.to)
        setDate({
          from: convertDate(datePicker.from, "start"),
          to: convertDate(datePicker?.to, "end"),
        });
      setFirstLoad(false);
    }
  }, [datePicker, firstLoad]);

  function convertDate(date: Date, type: "start" | "end") {
    const newDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${type === "start" ? "00:00:00" : "24:00:00"}`;
    return new Date(
      `${newDate}${moment(newDate).tz(timezoneDate).format("Z")}`
    );
  }

  return (
    <div className={cn("grid gap-2")}>
      <Popover open={open} onOpenChange={(open) => setOpen(open)}>
        <PopoverTrigger>
          <div
            id="date"
            className={cn(
              `w-fit justify-start text-left font-normal px-4 py-2 rounded-[6px] border-[1px] border-gray-300 flex items-center h-10 text-ellipsis whitespace-nowrap ${
                open ? "shadow-[#D7F4E7] shadow-[0_0_0_4px]" : ""
              }`,
              !datePicker && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {datePicker?.from ? (
              valueSelected !== "" ? (
                valueSelected
              ) : datePicker.to ? (
                <>
                  {datePicker.from.toLocaleDateString().replaceAll("-", "/")} -{" "}
                  {datePicker.to.toLocaleDateString().replaceAll("-", "/")}
                </>
              ) : (
                <>{datePicker.from.toLocaleDateString()}</>
              )
            ) : (
              <span>All time</span>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex rounded-[10px]">
            <div className="flex flex-col px-4 py-3 border-r-[1px] border-gray-100">
              <div
                onClick={() => {
                  setValueSelected("Today");
                  setDatePicker({
                    from: new Date(
                      moment()
                        .toDate()
                        .toLocaleString("en-US", { timeZone: timezoneDate })
                    ),
                    to: new Date(
                      moment()
                        .toDate()
                        .toLocaleString("en-US", { timeZone: timezoneDate })
                    ),
                  });
                }}
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                Today
              </div>
              <div
                onClick={() => {
                  setValueSelected("This week");
                  setDatePicker({
                    from: moment().startOf("week").toDate(),
                    to: moment().endOf("week").toDate(),
                  });
                }}
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                This week
              </div>
              <div
                onClick={() => {
                  setValueSelected("This month");
                  setDatePicker({
                    from: moment(new Date()).startOf("month").toDate(),
                    to: moment(new Date()).endOf("month").toDate(),
                  });
                }}
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                This month
              </div>
              <div
                onClick={() => {
                  setValueSelected("This year");
                  setDatePicker({
                    from: moment(new Date()).startOf("year").toDate(),
                    to: moment(new Date()).endOf("year").toDate(),
                  });
                }}
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                This year
              </div>
              <div
                onClick={() => {
                  setValueSelected("");
                  setDatePicker({ from: undefined, to: undefined });
                }}
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                All time
              </div>
            </div>
            <div>
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={datePicker?.from}
                selected={datePicker}
                onSelect={(date) => {
                  setDatePicker(date);
                  setValueSelected("");
                }}
                numberOfMonths={2}
                className="border-b-[1px] border-gray-300"
              />
              <div className="flex justify-end items-center flex-row gap-4 px-4 py-3">
                <Button
                  content="Cancel"
                  color="gray"
                  hierarchy="secondary"
                  size="md"
                  onClick={() => {
                    setOpen(false);
                    setDatePicker(date);
                  }}
                />
                <Button
                  content="Apply"
                  color="blue"
                  hierarchy="primary"
                  size="md"
                  onClick={() => {
                    setOpen(false);
                    if (datePicker?.from && !datePicker?.to) {
                      setDate({
                        from: new Date(convertDate(datePicker?.from, "start")),
                        to: new Date(
                          new Date(
                            convertDate(datePicker?.from, "end")
                          ).getTime()
                        ),
                      });
                      setDatePicker({
                        ...datePicker,
                        to: datePicker?.from,
                      });
                    } else if (datePicker?.from && datePicker?.to) {
                      setDate({
                        from: new Date(convertDate(datePicker.from, "start")),
                        to: new Date(
                          new Date(convertDate(datePicker?.to, "end")).getTime()
                        ),
                      });
                    } else {
                      setDate(undefined);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
