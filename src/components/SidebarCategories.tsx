import Link from "next/link";

const SidebarCategories = () => {
  const categories = [
    "Music",
    "Movies",
    "Festival",
    "Theater",
    "Comedy",
    "Trivia",
    "Fundraiser",
    "Dating",
    "Exercise",
    "Outdoors",
    "Food",
  ];

  return (
    <div className="absolute xl:right-[18%] lg:right-[21%] duration-1000 lg:block hidden">
      <div className=" text-white border-primary border-l-[1px] h-full w-48 py-4 xl:pl-12 pl-8 fixed">
        <p className=" font-bold text-xl pb-2 px-1 pt-6">Categories</p>
        <div className="border-b-[1px] ml-1 border-primary"></div>
        <ul className="text-lg">
          {categories.map((cat, idx) => (
            <li
              className="mt-2 px-2 hover:bg-primarydark rounded-md duration-500"
              key={cat}
            >
              <Link href={`/category/${cat}`} className="flex text-base ">
                <p className=""></p>
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarCategories;
