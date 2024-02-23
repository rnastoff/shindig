import FilterDropdown from "@/components/FilterDropdown";

const Search = () => {
  return (
    <div className="flex justify-between lg:mt-4 mt-2">
      <label className="max-w-full w-full mr-2">
        <input
          type="text"
          className="max-w-full w-full mr-4 text-white text-sm placeholder-white border-[1px] p-2 border-primary bg-background rounded-md outline-none"
          placeholder="Search Events..."
        />
      </label>
      <FilterDropdown />
    </div>
  );
};

export default Search;
