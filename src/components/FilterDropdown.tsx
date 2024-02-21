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
    <>
      <button
        className="relative"
        onClick={toggleDropdown}
        onBlur={dismissHandler}
      >
        <div className="flex justify-end bg-background border-[1px] border-primary text-white rounded-md px-3 py-2 text-sm">
          <p className="whitespace-nowrap">
            {selectTime ? selectTime : "Any Time"}
          </p>
          <ChevronDown color="white" size="18" className="self-center ml-2" />
        </div>

        {showDropdown && (
          <div className="absolute top-[44px] right-[0px] text-white text-sm text-right bg-background border-[1px] border-primary rounded-md">
            {times.map((city: string, index: number) => {
              return (
                <p
                  className="px-2 py-1 whitespace-nowrap hover:bg-primarydark rounded-md"
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
    </>
  );
};

export default FilterDropdown;
