import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

import { Search } from "react-bootstrap-icons";
import FilterDropdown from "@/components/FilterDropdown";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("Any Time");
  const router = useRouter();
  // searchTerm=something&date=somethingelse

  // useCallback because handleSearchAndFilter is required in the dependency array of the useEffect
  const handleSearchAndFilter = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined) => {
      if (e) e.preventDefault();
      router.push(`?searchTerm=${searchTerm}&date=${selectedDate}`);
    },
    [router, searchTerm, selectedDate]
  );

  // If selectedDate changes (the dropdown, we automatically submit
  useEffect(() => {
    handleSearchAndFilter();
  }, [selectedDate, handleSearchAndFilter]);

  return (
    <div className="flex justify-between lg:mt-4 mt-2">
      <form className="flex w-full">
        <label className="flex max-w-full w-full mr-2 border-[1px] p-2 border-primary bg-background rounded-sm">
          <input
            type="text"
            className="max-w-full w-full mr-4 text-white text-sm placeholder-white bg-background  outline-none"
            placeholder="Search Events..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button className="text-white" onClick={handleSearchAndFilter}>
            <Search className="text-xl" size="18" color="#ffffff" />
          </button>
        </label>

        <FilterDropdown selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </form>
    </div>
  );
};

export default SearchBar;
