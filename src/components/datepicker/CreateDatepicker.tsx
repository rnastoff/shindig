"use client";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { generateMonth, months } from "@/utils/utils";
import { useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";

import { z } from "zod";
import { EventSchema } from "@/lib/validation/Event";

import { Controller, UseFormRegister, Control, FieldValues } from "react-hook-form";

import { Calendar3 } from "react-bootstrap-icons";
import { ChevronLeft } from "react-bootstrap-icons";
import { ChevronRight } from "react-bootstrap-icons";

export const dynamic = "force-dynamic";

type FormData = z.infer<typeof EventSchema>;

interface CreateDatepickerProps {
  register: UseFormRegister<FormData>;
  control?: Control<FormData>;
}

const CreateDatepicker = ({ register, control }: CreateDatepickerProps) => {
  const [visible, setVisible] = useState(false);
  const [today, setToday] = useState(dayjs()); //used to generate month/days, dayjs object
  const [selectedDate, setSelectedDate] = useState(""); // format "01-04-2024"

  dayjs.extend(isSameOrBefore);
  dayjs.extend(isSameOrAfter);

  const toggleVisibility = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (!visible && selectedDate) setToday(dayjs(selectedDate, "MM-DD-YYYY")); //open to selected month
    setVisible((prevState) => !prevState);
    setTimeout(() => {
      console.log(visible);
    }, 200);
  };

  const handleMonthArrowClick = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    btn: string
  ) => {
    if (btn === "prev") setToday(today.month(today.month() - 1));
    else if (btn === "next") setToday(today.month(today.month() + 1));
    e.preventDefault();
  };

  const handleDayClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSelectedDate(e.currentTarget.value);
    setTimeout(() => {
      setVisible(false);
    }, 100);
    return e.currentTarget.value;
  };

  // Close datepicker when click away
  const domNode = useClickOutside(() => {
    setVisible(false);
  });

  // Generate S,M,T,W,T,F,S
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const daysOfWeekHtml = daysOfWeek.map((day) => {
    return (
      <p
        className="text-white text-sm font-semibold h-[30px] w-[35px] text-center"
        key={day}
      >
        {day}
      </p>
    );
  });

  // Generate Days of Month
  const days = generateMonth(today.month(), today.year());

  const getDaysClasses = (date: any, currentMonth: any) => {
    const currentMonthClass = currentMonth ? "text-white" : "";
    const disabledClass =
      "disabled:text-gray disabled:cursor-none disabled:hover:bg-transparent";
    const selectedClasses =
      date.format("MM-DD-YYYY") === selectedDate ? "bg-primary" : "";
    return [currentMonthClass, disabledClass, selectedClasses].join(" ");
  };

  const isDayButtonDisabled = (date: any, currentMonth: any) => {
    return !currentMonth || !date.isSameOrAfter(dayjs(), "day");
  };

  const visibilityClass = visible ? "block" : "hidden";

  return (
    <div className="mt-8">
      <p className="text-white text-base font-semibold ">
        Start Date
        <span className="text-gray text-xs font-normal ml-4">Required</span>
      </p>

      {/* <Controller  */}
      <Controller
        name="date"
        control={control}
        render={({ field: { ref, onChange, value } }) => (
          <div className="lg:w-[180px] w-full relative mt-1">
            {/* Select Day Input box and Icon */}
            <div
              onClick={toggleVisibility}
              className="flex justify-between bg-none border-[1px] border-primary rounded-sm w-[64] py-[5.5px] px-2 cursor-pointer"
            >
              <input
                type="text"
                value={value ? value : "Select Date"}
                className="w-[130px] text-white bg-transparent cursor-pointer border-none outline-none caret-transparent"
                readOnly
              />
              <Calendar3 color="white" size="20" className="self-center" />
            </div>

            {/* Entire Datepicker Calendar */}
            <div
              className={`bg-background absolute w-[300px] top-[42px] border-[1px] border-primary rounded-sm overflow-hidden z-10 ${visibilityClass} `}
              ref={domNode}
            >
              {/* Header - Month and Year*/}
              <div className="bg-primary flex justify-between py-2">
                <button className="px-2 py-1">
                  <ChevronLeft
                    color="white"
                    size="16"
                    className="self-center"
                    onClick={(e) => handleMonthArrowClick(e, "prev")}
                  />
                </button>
                <p className="text-white font-semibold text-base">
                  {months[today.month()]} {today.year()}
                </p>
                <button className="px-2 py-1">
                  <ChevronRight
                    color="white"
                    size="16"
                    className="self-center"
                    onClick={(e) => handleMonthArrowClick(e, "next")}
                  />
                </button>
              </div>

              {/* Days of Week and Day Rows*/}
              <div className="p-2">
                <div className="w-full grid grid-cols-7">{daysOfWeekHtml}</div>

                {/* Days - Rows */}
                <div className="w-full grid grid-cols-7">
                  {days.map(({ date, currentMonth }, index) => {
                    return (
                      <div key={index} className="grid place-content-center text-sm">
                        <button
                          className={`${getDaysClasses(
                            date,
                            currentMonth
                          )}  text-white text-sm h-8 w-8 grid place-content-center rounded-full duration-100 cursor-pointer`}
                          onClick={(e) => {
                            e.preventDefault();
                            onChange(e.currentTarget.value);
                          }}
                          value={date.format("MM-DD-YYYY")}
                          disabled={isDayButtonDisabled(date, currentMonth)}
                        >
                          {date.date()}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CreateDatepicker;
