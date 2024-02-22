"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Events from "@/components/Events";
import CategoriesSidebar from "@/components/CategoriesSidebar";
import NavMobile from "@/components/NavMobile";

export default function Home() {
  return (
    <main className="flex justify-center items-center ">
      <div className="relative lg:max-w-7xl max-w-3xl w-full h-screen ">
        <div className="relative scale-1">
          <Navbar />
          <NavMobile />
          <CategoriesSidebar />
        </div>
        <Events />
      </div>
    </main>
  );
}
