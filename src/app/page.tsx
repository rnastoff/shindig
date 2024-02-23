"use client";

import Navbar from "@/components/Navbar";
import NavMobile from "@/components/NavMobile";
import EventsFeed from "@/components/EventsFeed";
import CategoriesSidebar from "@/components/CategoriesSidebar";
import HeaderMobile from "@/components/HeaderMobile";

export default function Home() {
  return (
    <div>
      <HeaderMobile />
      <div className="relative">
        <Navbar />
        <NavMobile />
        <CategoriesSidebar />
      </div>
      <EventsFeed />
    </div>
  );
}
