import { useState } from "react";
import { fillTimeArray } from "@/utils/utils";
import { ChevronDown } from "react-bootstrap-icons";
import useClickOutside from "@/hooks/useClickOutside";

import { z } from "zod";
import { EventSchema } from "@/app/models/Event";
import { UseFormRegister, Controller, Control, FieldValues } from "react-hook-form";

type FormData = z.infer<typeof EventSchema>;

interface CreateTimePickerProps {
  register: UseFormRegister<FormData>;
  control?: Control<FormData>;
}

const CreateTimePicker = ({ register, control }: CreateTimePickerProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const times = fillTimeArray();

  const toggleDropdown = (e: any) => {
    setDropdownVisible((prevState) => !prevState);
  };

  const domNode = useClickOutside(() => {
    setDropdownVisible(false);
  });

  return (
    <div className="mt-8">
      <p className="text-white font-semibold">
        Start Time
        <span className="text-gray text-xs font-normal ml-4">Required</span>
      </p>
      {/*  */}
      <Controller
        name="time"
        control={control}
        render={({ field: { ref, onChange, value } }) => (
          <div
            className="relative self-center mt-1 md:w-[180px] w-full"
            onClick={toggleDropdown}
            ref={domNode}
          >
            <div className="flex justify-between bg-background border-[1px] border-primary rounded-sm py-[5.5px] px-2">
              <input
                type="text"
                className="w-[130px] text-white bg-transparent cursor-pointer border-none outline-none caret-transparent "
                value={value ? value : "Select Time"}
                // ref={ref}
                readOnly
              />

              <ChevronDown color="white" size="14" className="self-center ml-2" />
            </div>

            {dropdownVisible && (
              <div className="absolute h-48 overflow-y-auto top-[42px] right-[0px] w-[160px] py-1 px-1 text-white  text-right bg-primary border-[1px] border-primary rounded-sm z-10">
                {times.map((time: string, index: number) => {
                  return (
                    <button
                      className="sm:text-base text-xs text-right px-2 py-1 whitespace-nowrap hover:bg-primarydark rounded-md w-full"
                      key={index}
                      onClick={() => onChange(time)}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      />{" "}
      {/* Controller */}
    </div>
  );
};

export default CreateTimePicker;
