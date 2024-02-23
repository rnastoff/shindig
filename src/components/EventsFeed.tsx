import PreviewPost from "@/components/PreviewPost";

import Search from "./Search";

const EventsFeed = () => {
  return (
    <main className="flex justify-center bg-background px-4">
      <div className="lg:w-[550px] w-[350px]">
        {/* Fixed Section */}
        <div className="bg-background pb-4 fixed lg:w-[550px] w-[350px] sm:pt-8 pt-2 sm:block hidden">
          <Search />
        </div>

        {/* Posts */}
        <div className="text-white lg:mt-28 sm:mt-28 mt-24 duration-500">
          <PreviewPost />
          <PreviewPost />
          <PreviewPost />
        </div>

        {/* Load More Button */}
        <button className="text-xl text-center text-gray font-bold  w-full mt-6 mb-20">
          Load More
        </button>
      </div>
    </main>
  );
};

export default EventsFeed;
