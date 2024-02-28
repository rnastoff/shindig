import { useState } from "react";

import { ChevronDown } from "react-bootstrap-icons";

const CreateTimeDropdown = () => {
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

  const toggleDropdown = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
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

  const dropdownHtml = times.map((city: string, index: number) => {
    return (
      <p
        className="sm:text-base text-xs px-2 py-1 whitespace-nowrap hover:bg-primarydark rounded-md"
        key={index}
        onClick={() => timeSelection(city)}
      >
        {city}
      </p>
    );
  });

  return (
    <div className="mt-8">
      <p className="text-white font-semibold text-base">Start Time</p>
      <button
        className="relative self-center mt-1 w-[180px]"
        onClick={toggleDropdown}
        onBlur={dismissHandler}
      >
        <div className="flex justify-between bg-background border-[1px] border-primary rounded-sm py-[5.5px] px-2">
          <p className="text-white whitespace-nowrap sm:text-base text-xs ">
            {selectTime ? selectTime : "Any Time"}
          </p>
          <ChevronDown color="white" size="14" className="self-center ml-2" />
        </div>

        {showDropdown && (
          <div className="absolute sm:top-[44px] top-[34px] right-[0px] w-[160px] py-1 px-1 text-white text-sm text-right bg-primary border-[1px] border-primary rounded-md z-10">
            {dropdownHtml}
          </div>
        )}
      </button>
    </div>
  );
};

export default CreateTimeDropdown;
