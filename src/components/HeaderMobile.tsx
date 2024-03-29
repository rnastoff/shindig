"use client";

import Link from "next/link";
import { Pacifico } from "next/font/google";
import SearchBarMobile from "./SearchBarMobile";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

const HeaderMobile = () => {
  return (
    <Link href="/" className="block sm:hidden bg-background fixed pb-2 w-full">
      <div className="flex justify-between border-b-[1px] border-primary p-4 ">
        <h1
          className={`${pacifico.className}  text-primary sm:text-[30px] text-[24px] self-center`}
        >
          Shindig
        </h1>
        <SearchBarMobile />
      </div>
    </Link>
  );
};

export default HeaderMobile;
