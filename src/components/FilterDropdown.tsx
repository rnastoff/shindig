import { useEffect, useState } from "react";

import { ChevronDown } from "react-bootstrap-icons";

const FilterDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectTime, setSelectTime] = useState("");

  const times = [
    "Any Time",
    "Today",
    "Tomorrow",
    "This Week",
    "This Weekend",
    "Next Week",
    "Specific Day",
  ];

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (event.currentTarget === event.target) {
      setShowDropdown(false);
    }
  };

  const timeSelection = (time: string) => {
    setSelectTime(time);
  };

  return (
    <button
      className="relative self-center"
      onClick={toggleDropdown}
      onBlur={dismissHandler}
    >
      <div className="flex justify-end bg-background border-[1px] border-primary  rounded-md sm:px-3 sm:py-2 py-1 px-2">
        <p className="text-white whitespace-nowrap sm:text-sm text-xs">
          {selectTime ? selectTime : "Any Time"}
        </p>
        <ChevronDown color="white" size="14" className="self-center ml-2" />
      </div>

      {showDropdown && (
        <div className="absolute sm:top-[44px] top-[34px] right-[0px] text-white text-sm text-right bg-background border-[1px] border-primary rounded-md z-10">
          {times.map((city: string, index: number) => {
            return (
              <p
                className="sm:text-base text-xs px-2 py-1 whitespace-nowrap hover:bg-primarydark rounded-md"
                key={index}
                onClick={() => timeSelection(city)}
              >
                {city}
              </p>
            );
          })}
        </div>
      )}
    </button>
  );
};

export default FilterDropdown;
