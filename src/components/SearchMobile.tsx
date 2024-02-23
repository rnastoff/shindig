import FilterDropdown from "@/components/FilterDropdown";

const SearchMobile = () => {
  return (
    <div className="sm:hidden flex justify-between self-center">
      <label className="mr-2 self-center">
        <input
          type="text"
          className=" w-[150px] text-white text-xs placeholder-white border-[1px] p-1 border-primary bg-background rounded-md outline-none"
          placeholder="Search Events..."
        />
      </label>
      <FilterDropdown />
    </div>
  );
};

export default SearchMobile;
