import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search } from "react-bootstrap-icons";

import FilterDropdown from "@/components/FilterDropdown";

const SearchBarMobile = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("Any Time");
  const router = useRouter();

  const handleSearchAndFilter = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined) => {
      if (e) e.preventDefault();
      router.push(`?searchTerm=${searchTerm}&date=${selectedDate}`);
    },
    [router, searchTerm, selectedDate]
  );

  // If selectedDate changes (the dropdown -> datepicker, we automatically submit)
  useEffect(() => {
    handleSearchAndFilter();
  }, [selectedDate, handleSearchAndFilter]);

  // flex justify-between

  return (
    <div className="sm:hidden flex justify-between self-center">
      <label className="flex self-center border-[1px] border-primary rounded-sm mr-2 py-1">
        <input
          type="text"
          className="md:w-[150px] w-[100px] text-white text-xs placeholder-white bg-background outline-none self-center pl-1"
          placeholder="Search Events"
        />
        <button className="text-white mr-2 self-center" onClick={handleSearchAndFilter}>
          <Search className="text-xl" size="12" color="#ffffff" />
        </button>
      </label>
      <FilterDropdown selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
};

export default SearchBarMobile;
