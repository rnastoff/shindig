import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import FilterDatepicker from "./datepicker/FilterDatepicker";

interface FilterDropdownProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

const FilterDropdown = ({ selectedDate, setSelectedDate }: FilterDropdownProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [datepickerVisible, setDatepickerVisible] = useState(false);

  const dates = [
    "Any Time",
    "Today",
    "Tomorrow",
    "This Week",
    "This Weekend",
    "Next Week",
  ];

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const openDatepicker = () => {
    setDropdownVisible(false);
    setDatepickerVisible(true);
  };

  const dropdownHtml = dates.map((date: string, index: number) => {
    console.log(date);
    return (
      <p
        className="sm:text-base text-xs px-2 py-1 whitespace-nowrap hover:bg-primarydark rounded-md"
        key={index}
        onClick={() => setSelectedDate(date)}
      >
        {date}
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
          {selectedDate ? selectedDate : "Any Time"}
        </p>
        <ChevronDown color="white" size="14" className="self-center ml-2" />
      </div>

      {dropdownVisible && (
        <div className="absolute sm:top-[44px] top-[34px] right-[0px] w-[160px] py-1 px-1 text-white text-sm text-right bg-primary border-[1px] border-primary rounded-md z-10">
          {dropdownHtml}
          <p
            className="sm:text-base text-xs px-2 py-1 whitespace-nowrap hover:bg-primarydark rounded-md"
            key={"selectDate"}
            onClick={openDatepicker}
          >
            Select Date
          </p>
        </div>
      )}

      {datepickerVisible && (
        <FilterDatepicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setDatepickerVisible={setDatepickerVisible}
          setDropdownVisible={setDropdownVisible}
        />
      )}
    </div>
  );
};

export default FilterDropdown;
