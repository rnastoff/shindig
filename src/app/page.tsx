"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import NavMobile from "@/components/NavMobile";
import EventsFeed from "@/components/EventsFeed";
import CategoriesSidebar from "@/components/CategoriesSidebar";
import MobileHeader from "@/components/MobileHeader";

export default function Home() {
  return (
    <div>
      <MobileHeader />
      <div className="relative scale-1">
        <Navbar />
        <NavMobile />
        <CategoriesSidebar />
      </div>
      <EventsFeed />
    </div>
  );
}
