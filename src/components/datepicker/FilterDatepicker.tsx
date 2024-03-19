"use client";
import { useState } from "react";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

import useClickOutside from "@/hooks/useClickOutside";
import { generateMonth, months } from "@/utils/utils";

import { Calendar3 } from "react-bootstrap-icons";
import { ChevronLeft } from "react-bootstrap-icons";
import { ChevronRight } from "react-bootstrap-icons";

interface FilterDatepickerProps {
  selectDate: () => void;
  setDatepickerVisible: (visible: boolean) => void;
  setDropdownVisible: (visible: boolean) => void;
}

const FilterDatepicker = ({
  selectDate,
  setDatepickerVisible,
  setDropdownVisible,
}: FilterDatepickerProps) => {
  const [visible, setVisible] = useState(true);
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
    console.log("handleDateClick");
    e.preventDefault();
    setSelectedDate(e.currentTarget.value); //for the visible input
    setTimeout(() => {
      setDatepickerVisible(false);
    }, 100);
  };

  // Close datepicker when click away
  const domNode = useClickOutside(() => {
    setDatepickerVisible(false);
    setDropdownVisible(false);
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

  const daysHtml = days.map(({ date, currentMonth, today }, index) => {
    const currentMonthClass = currentMonth ? "text-white" : "";
    const disabledClass =
      "disabled:text-gray disabled:cursor-none disabled:hover:bg-transparent";
    const selectedClasses =
      date.format("MM-DD-YYYY") === selectedDate ? "bg-primary" : "";
    const disabled = !currentMonth || !date.isSameOrAfter(dayjs(), "day");

    return (
      <div key={index} className="grid place-content-center text-sm">
        <button
          className={`${currentMonthClass} ${disabledClass} ${selectedClasses}  text-white text-sm h-8 w-8 grid place-content-center rounded-full duration-100 cursor-pointer`}
          onClick={handleDayClick}
          value={date.format("MM-DD-YYYY")}
          disabled={disabled}
        >
          {date.date()}
        </button>
      </div>
    );
  });

  return (
    <div
      className={`bg-background absolute w-[300px] top-[42px] right-[0px] border-[1px] border-primary rounded-sm overflow-hidden z-10 `}
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
        <div className="w-full grid grid-cols-7">{daysHtml}</div>
      </div>
    </div>
  );
};

export default FilterDatepicker;
