import Link from "next/link";

const CategoriesSidebar = () => {
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
    <div className="absolute right-[18%]">
      <div className=" text-white border-primary border-l-[1px] h-full w-48 p-4 pl-12 fixed">
        <p className=" font-bold text-xl border-b-[1px] pb-2  border-primary pt-12">
          Categories
        </p>
        <ul className="text-lg">
          {categories.map((cat, idx) => (
            <li className="mt-2" key="cat">
              <Link href={`/category/${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesSidebar;
