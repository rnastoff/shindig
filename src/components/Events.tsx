import PreviewPost from "@/components/PreviewPost";
import FilterDropdown from "@/components/FilterDropdown";

const Events = () => {
  return (
    <div className="flex justify-center bg-background">
      <div className="lg:w-[550px] w-[350px] ">
        <div className="bg-background pb-4 fixed lg:w-[550px] w-[350px] pt-8">
          <h2 className="text-white font-black text-4xl">Events</h2>
          <div className="flex justify-between mt-4">
            <label className="max-w-full w-full mr-2">
              <input
                type="text"
                className="max-w-full w-full mr-4 text-white text-sm placeholder-white border-[1px] p-2 border-primary bg-background rounded-md outline-none"
                placeholder="Search Events..."
              />
            </label>
            <FilterDropdown />
          </div>
        </div>

        <div className="text-white mt-40">
          <PreviewPost />
          <PreviewPost />
          <PreviewPost />
        </div>
      </div>
    </div>
  );
};

export default Events;
