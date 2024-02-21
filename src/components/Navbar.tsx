import Link from "next/link";
import { House } from "react-bootstrap-icons";
import { Calendar } from "react-bootstrap-icons";
import { PlusSquare } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

const Navbar = () => {
  const iconSize = 27;

  return (
    <nav className=" border-r-[1px] border-primary h-full w-56 fixed">
      <div className="mt-8">
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
              <Calendar color="white" size={iconSize} className="self-center" />
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
      </div>
    </nav>
  );
};

export default Navbar;
