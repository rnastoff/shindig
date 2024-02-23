import PreviewPost from "@/components/PreviewPost";
import FilterDropdown from "@/components/FilterDropdown";

const EventsFeed = () => {
  return (
    <main className="flex justify-center bg-background px-4">
      <div className="lg:w-[550px] w-[350px]">
        {/* Fixed Section */}
        <div className="bg-background pb-4 fixed lg:w-[550px] w-[350px] sm:pt-8 pt-2">
          <h2 className="text-white font-black md:text-4xl text-2xl">Events</h2>

          {/* Search and Filter */}
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
        </div>

        {/* Posts */}
        <div className="text-white lg:mt-40 sm:mt-36 mt-28 duration-500">
          <PreviewPost />
          <PreviewPost />
          <PreviewPost />
        </div>

        {/* Load More Button */}
        <button className="text-2xl text-center text-gray font-bold  w-full my-6">
          Load More
        </button>
      </div>
    </main>
  );
};

export default EventsFeed;
