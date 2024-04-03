import { useState } from "react";
import { fillTimeArray } from "@/utils/utils";
import { ChevronDown } from "react-bootstrap-icons";

import { z } from "zod";
import { EventSchema } from "@/app/models/Event";

import { UseFormRegister } from "react-hook-form";

type FormData = z.infer<typeof EventSchema>;

interface CreateTimeDropdownProps {
  timeError: string | undefined;
  register: UseFormRegister<FormData>;
}

const CreateTimeDropdown = ({ timeError, register }: CreateTimeDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const times = fillTimeArray();

  const toggleDropdown = (e: any) => {
    setShowDropdown((prevState) => !prevState);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (event.currentTarget === event.target) {
      setShowDropdown(false);
    }
  };

  // const timeSelection = (time: string) => {
  //   setSelectedTime(time);
  // };

  const dropdownHtml = times.map((time: string, index: number) => {
    return (
      <button
        className="sm:text-base text-xs text-right px-2 py-1 whitespace-nowrap hover:bg-primarydark rounded-md w-full"
        key={index}
        onClick={() => setSelectedTime(time)}
      >
        {time}
      </button>
    );
  });

  return (
    <div className="mt-8">
      <p className="text-white font-semibold">
        Start Time
        <span className="text-gray text-xs font-normal ml-4">Required</span>
      </p>
      <div
        className="relative self-center mt-1 md:w-[180px] w-full"
        onClick={toggleDropdown}
        // onBlur={dismissHandler}
      >
        <div className="flex justify-between bg-background border-[1px] border-primary rounded-sm py-[5.5px] px-2">
          <input
            type="text"
            className="w-[130px] text-white bg-transparent cursor-pointer border-none outline-none caret-transparent "
            value={selectedTime ? selectedTime : "Any Time"}
            readOnly
            {...register("time")}
          />

          <ChevronDown color="white" size="14" className="self-center ml-2" />
        </div>

        {showDropdown && (
          <div className="absolute h-48 overflow-y-auto top-[42px] right-[0px] w-[160px] py-1 px-1 text-white  text-right bg-primary border-[1px] border-primary rounded-sm z-10">
            {dropdownHtml}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateTimeDropdown;
