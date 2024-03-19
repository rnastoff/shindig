import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import FilterDatepicker from "./datepicker/FilterDatepicker";

const FilterDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectTime, setSelectTime] = useState("");
  const [datepickerVisible, setDatepickerVisible] = useState(false);

  const times = [
    "Any Time",
    "Today",
    "Tomorrow",
    "This Week",
    "This Weekend",
    "Next Week",
    "Specific Date",
  ];

  const handleDatepicker = () => {
    setDropdownVisible(false);
    setDatepickerVisible(true);
  };

  const selectDate = () => {
    setDropdownVisible(false);
    setDatepickerVisible(false);
    //setTime?
  };

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (event.currentTarget === event.target) {
      setDropdownVisible(false);
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
    <div
      className="relative self-center cursor-pointer"
      onClick={toggleDropdown}
      // onBlur={dismissHandler}
    >
      <div className="flex justify-end bg-background border-[1px] border-primary  rounded-md sm:px-3 sm:py-2 py-1 px-2">
        <p className="text-white whitespace-nowrap sm:text-sm text-xs">
          {selectTime ? selectTime : "Any Time"}
        </p>
        <ChevronDown color="white" size="14" className="self-center ml-2" />
      </div>

      {dropdownVisible && (
        <div className="absolute sm:top-[44px] top-[34px] right-[0px] w-[160px] py-1 px-1 text-white text-sm text-right bg-primary border-[1px] border-primary rounded-md z-10">
          {dropdownHtml}
          <p
            className="sm:text-base text-xs px-2 py-1 whitespace-nowrap hover:bg-primarydark rounded-md"
            key={"selectDate"}
            onClick={handleDatepicker}
          >
            Select Date
          </p>
        </div>
      )}

      {datepickerVisible && (
        <FilterDatepicker
          selectDate={selectDate}
          setDatepickerVisible={setDatepickerVisible}
          setDropdownVisible={setDropdownVisible}
        />
      )}
    </div>
  );
};

export default FilterDropdown;
