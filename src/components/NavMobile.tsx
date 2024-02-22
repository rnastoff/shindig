import Link from "next/link";

import { House } from "react-bootstrap-icons";
import { Calendar } from "react-bootstrap-icons";
import { PlusSquare } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";

const NavMobile = () => {
  const iconSize = 18;

  return (
    <nav className="sm:hidden block fixed bottom-0 bg-background border-t-[1px] border-primary z-1 px-4 py-3 w-full">
      <ul className="flex justify-between">
        <li>
          <Link href="/" className="flex flex-col justify-items-center align-center">
            <House color={"#d33232"} size={iconSize} className="self-center" />
            <p className="text-white text-xs font-semibold mt-1">Events</p>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex flex-col justify-items-center align-center">
            <PlusSquare color={"#d33232"} size={iconSize} className="self-center" />
            <p className="text-white text-xs font-semibold mt-1">Create</p>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex flex-col justify-items-center align-center">
            <Person color={"#d33232"} size={iconSize} className="self-center" />
            <p className="text-white text-xs font-semibold mt-1">Profile</p>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex flex-col justify-items-center align-center">
            <Gear color={"#d33232"} size={iconSize} className="self-center" />
            <p className="text-white text-xs font-semibold mt-1">Settings</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
