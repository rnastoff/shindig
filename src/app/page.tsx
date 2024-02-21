"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import FilterDropdown from "@/components/FilterDropdown";
import CategoriesSidebar from "@/components/CategoriesSidebar";
import PreviewPost from "@/components/PreviewPost";

import TimeDropdown from "@/components/TimeDropdown";

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
    <main className="flex justify-center items-center ">
      <div className="relative lg:max-w-7xl max-w-3xl w-full h-screen border border-green">
        <div className="relative scale-1">
          <Navbar />
          <CategoriesSidebar />
        </div>

        <div className="flex justify-center">
          <div className="w-[600px] mt-8">
            <div className="bg-background pb-8  border-b-[1px] border-b-primary ">
              <h2 className="text-white font-black text-4xl">Events</h2>
              <div className="flex justify-between mt-4">
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

            <div className="text-white">
              <PreviewPost />
              <PreviewPost />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
