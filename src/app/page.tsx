import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { House } from "react-bootstrap-icons";
import { Calendar } from "react-bootstrap-icons";
import { PlusSquare } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";

import { Pacifico } from "next/font/google";
import TimeDropdown from "@/components/TimeDropdown";

// const pacifico = Pacifico({ subsets: ["latin"] });
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  const iconSize = 27;

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
    <main className="flex justify-center mt-8">
      <div className="flex justify-between lg:max-w-7xl max-w-3xl w-full h-screen">
        {/* NAV BAR */}
        <nav className=" border-r-[1px] border-primary h-full w-56">
          <h1 className={`${pacifico.className} text-primary text-[44px]`}>
            Shindig
          </h1>

          {/* Nav */}
          <ul className="mr-2 mt-6">
            <li className="hover:bg-primarydark duration-300 px-4 py-2 rounded-md">
              <Link href="/" className="flex">
                <House color="white" size={iconSize} className="self-center" />
                <p className="text-white ml-2 self-center">Events</p>
              </Link>
            </li>
            <li className="hover:bg-primarydark duration-300 px-4 py-2 rounded-md mt-4">
              <Link href="/" className="flex">
                <Calendar
                  color="white"
                  size={iconSize}
                  className="self-center"
                />
                <p className="text-white ml-2 self-center">Today</p>
              </Link>
            </li>
            <li className="hover:bg-primarydark duration-300 px-4 py-2 rounded-md mt-4">
              <Link href="/" className="flex">
                <PlusSquare
                  color="white"
                  size={iconSize}
                  className="self-center"
                />
                <p className="text-white ml-2 self-center">Create</p>
              </Link>
            </li>
            <li className="hover:bg-primarydark duration-300 px-4 py-2 rounded-md mt-4">
              <Link href="/" className="flex">
                <Person color="white" size={iconSize} className="self-center" />
                <p className="text-white ml-2 self-center">Person</p>
              </Link>
            </li>
            <li className="hover:bg-primarydark duration-300 px-4 py-2 rounded-md mt-4">
              <Link href="/" className="flex">
                <Gear color="white" size={iconSize} className="self-center" />
                <p className="text-white ml-2 self-center">Settings</p>
              </Link>
            </li>
          </ul>
        </nav>

        {/* CENTER SHIT */}

        {/* EVENTS AND SEARCH */}
        <div className="w-[650px]">
          {/* EVENTS, SEARCH, TITLE */}
          <div>
            <h2 className="text-white font-black text-4xl">Events</h2>
            <div className="flex justify-between mt-4">
              <input
                type="text"
                className="text-white placeholder-white border-[1px] px-2 border-primary bg-background rounded-md outline-none w-[78%]"
                placeholder="Search Events..."
              ></input>
              <TimeDropdown />
            </div>
          </div>

          {/* EVENT POSTS */}
          {/* <div className="text-white">
            <div>
              <p>SATURDAY DECEMBER 10, 2024</p>
              <p>Chicago Raw Beef Festival</p>
              <p>Millenium Park</p>
              <Image />
            </div>
          </div> */}
        </div>

        {/* CATEGORIES RIGHT */}
        <div className=" text-white border-primary border-l-[1px] w-48 p-4 pl-12">
          <p className=" font-bold text-xl border-b-[1px] pb-2  border-primary mt-12">
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
        {/* //////////////////////////////////////// */}
      </div>
    </main>
  );
}
