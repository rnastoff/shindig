"use client";
import { useState } from "react";

import { Calendar3 } from "react-bootstrap-icons";
import { ChevronLeft } from "react-bootstrap-icons";
import { ChevronRight } from "react-bootstrap-icons";

const DatePicker = () => {
  const [visible, setVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const toggleVisibility = (e: any) => {
    e.preventDefault();
    setVisible((prevState) => !prevState);
  };

  const visibilityClass = visible ? "block" : "hidden";

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

  const days = ["21", "22", "23", "24", "25", "26", "27"];
  const daysHtml = days.map((day) => {
    return (
      <button
        key={day}
        className="text-white text-sm hover:text-green hover:bg-white duration-100 flex justify-center items-center text-center  w-[35px] h-[35px]"
      >
        {day}
      </button>
    );
  });

  return (
    <div className="mt-12 w-[200px] relative">
      {/* Input box and Icon */}
      <div
        onClick={toggleVisibility}
        className="flex justify-between bg-white rounded-sm w-[64] py-1 px-2 cursor-pointer"
      >
        <input
          type="text"
          value="Specific Time"
          className="w-[130px] border-2 cursor-pointer border-none outline-none caret-transparent"
          readOnly
        />
        <Calendar3 color="red" size="20" className="self-center" />
      </div>

      {/* Calendar */}
      <div
        className={`bg-[#444444] absolute w-[300px] top-[40px]  rounded-sm overflow-hidden ${visibilityClass} `}
      >
        {/* Header */}
        <div className="bg-gray flex justify-between p-2">
          <button>
            <ChevronLeft color="white" size="16" className="self-center" />
          </button>
          <p className="text-white font-semibold text-base">December 2023</p>
          <button>
            <ChevronRight color="white" size="16" className="self-center" />
          </button>
        </div>

        <div className="p-2">
          {/* Days of the week */}

          <div className="flex justify-between">{daysOfWeekHtml}</div>

          {/* Days - Rows */}
          <div className="flex justify-between ">{daysHtml}</div>
          <div className="flex justify-between ">{daysHtml}</div>
          <div className="flex justify-between ">{daysHtml}</div>
          <div className="flex justify-between ">{daysHtml}</div>
          <div className="flex justify-between ">{daysHtml}</div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
