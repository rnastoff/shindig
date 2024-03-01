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

  const icons = [
    { icon: <House color="white" size={iconSize} className="self-center" /> },
    { icon: <Calendar color="white" size={iconSize} className="self-center" /> },
    { icon: <PlusSquare color="white" size={iconSize} className="self-center" /> },
    { icon: <Person color="white" size={iconSize} className="self-center" /> },
    { icon: <Gear color="white" size={iconSize} className="self-center" /> },
  ];

  const navButtons = [
    { text: "Events", href: "/", icon: icons[0].icon },
    { text: "Today", href: "/today", icon: icons[1].icon },
    { text: "Create", href: "/create", icon: icons[2].icon },
    { text: "Profile", href: `/user/someID`, icon: icons[3].icon },
    { text: "Settings", href: "/settings", icon: icons[4].icon },
  ];

  const buttonsHtml = navButtons.map((btn) => (
    <li
      className="md:hover:bg-primarydark duration-300 px-2 py-2 rounded-md mt-4"
      key={btn.text}
    >
      <Link href={btn.href} className="flex">
        {btn.icon}
        <p className="text-white ml-2 self-center lg:block hidden">{btn.text}</p>
      </Link>
    </li>
  ));

  return (
    <nav className=" border-r-[1px] border-primary h-full fixed lg:w-56 w-24 sm:block hidden px-4">
      <div className="mt-8 lg:block flex flex-col justify-items-center align-center">
        <Link href="/" className="self-center">
          <h1
            className={`${pacifico.className} text-primary lg:text-[35px] text-[20px] px-2`}
          >
            Shindig
          </h1>
        </Link>

        <ul className="lg:mt-6 mt-2 self-center">{buttonsHtml}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
